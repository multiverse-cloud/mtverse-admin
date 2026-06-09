'use client';

import React, { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
        copied
          ? 'bg-success-500/10 text-success-500 dark:bg-success-500/20'
          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
      } ${className}`}
      title={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
