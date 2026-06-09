'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

// ── Progress bar phases ───────────────────────────────────────────
type Phase = 'idle' | 'loading' | 'completing' | 'done';

// ── Timing constants (ms) ─────────────────────────────────────────
const GROW_DURATION = 400;     // Time to grow bar to ~65%
const COMPLETE_DURATION = 300; // Time to grow from 65% → 100%
const FADE_DURATION = 300;     // Time to fade the bar out after completion
const MIN_VISIBLE = 150;       // Minimum time the bar should be visible to avoid flicker

export function ContentLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const loadStartRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Clear all pending timers
  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  // Add a timer and track it
  const addTimer = useCallback(
    (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timersRef.current.push(id);
      return id;
    },
    []
  );

  useEffect(() => {
    // Route changed – start loading sequence
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      clearTimers();

      loadStartRef.current = Date.now();

      // Phase: idle → loading
      setPhase('loading');
      setProgress(0);

      // Grow the bar to ~65% in stepped increments for smooth CSS transition
      requestAnimationFrame(() => {
        setProgress(30);
        addTimer(() => setProgress(55), GROW_DURATION * 0.4);
        addTimer(() => setProgress(65), GROW_DURATION * 0.8);
      });

      // After grow phase, transition to completing
      addTimer(() => {
        const elapsed = Date.now() - loadStartRef.current;
        const remaining = Math.max(0, MIN_VISIBLE - elapsed);

        addTimer(() => {
          setPhase('completing');
          setProgress(100);

          // After completing, fade the bar out
          addTimer(() => {
            setPhase('done');

            // After fade-out, reset to idle
            addTimer(() => {
              setPhase('idle');
              setProgress(0);
            }, FADE_DURATION);
          }, COMPLETE_DURATION);
        }, remaining);
      }, GROW_DURATION);
    }

    return () => clearTimers();
  }, [pathname, clearTimers, addTimer]);

  // ── Derive visual state ──────────────────────────────────────────
  const barVisible = phase === 'loading' || phase === 'completing';
  const barFading = phase === 'done';
  const contentTransitioning = phase === 'loading';

  return (
    <>
      {/* ── Thin progress bar – sticky at the top of the scrollable content area ── */}
      <div
        className="content-loader-bar-track"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page loading progress"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          zIndex: 50,
          pointerEvents: 'none',
          opacity: barFading ? 0 : barVisible ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-out`,
          flexShrink: 0,
        }}
      >
        {/* Bar fill */}
        <div
          className="content-loader-bar-fill"
          style={{
            height: '100%',
            width: `${progress}%`,
            borderRadius: '0 2px 2px 0',
            background: 'linear-gradient(90deg, var(--color-brand-500, #465fff), var(--color-brand-400, #7592ff))',
            transition: phase === 'loading'
              ? `width ${GROW_DURATION * 0.5}ms ease-out`
              : `width ${COMPLETE_DURATION}ms ease-in-out`,
            boxShadow: '0 0 8px rgba(70, 95, 255, 0.4), 0 0 2px rgba(70, 95, 255, 0.6)',
          }}
        />
      </div>

      {/* ── Subtle shimmer overlay during loading ── */}
      {contentTransitioning && (
        <div
          className="content-loader-shimmer pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              var(--color-brand-100, rgba(70, 95, 255, 0.06)) 50%,
              transparent 100%
            )`,
            backgroundSize: '200% 100%',
            animation: 'content-shimmer 1.5s ease-in-out infinite',
            opacity: 0.5,
          }}
        />
      )}

      {/* ── Content with fade-in ── */}
      <div
        className={phase === 'done' ? 'content-fade-in' : ''}
        style={{
          opacity: contentTransitioning ? 0.7 : 1,
          transition: 'opacity 200ms ease-out',
        }}
      >
        {children}
      </div>
    </>
  );
}

export default ContentLoader;
