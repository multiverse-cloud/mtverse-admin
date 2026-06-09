'use client';

import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
  className = '',
}: CodeBlockProps) {
  // Map custom languages to Prism-supported ones
  const prismLanguage = language === 'blade' ? 'markup' : language === 'vue' ? 'jsx' : language;

  return (
    <div className={`overflow-hidden rounded-lg bg-[#1e1e2e] ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          {/* Terminal dots */}
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-error-500/80" />
            <div className="size-2.5 rounded-full bg-warning-500/80" />
            <div className="size-2.5 rounded-full bg-success-500/80" />
          </div>
          {filename && (
            <span className="ml-2 text-xs font-medium text-gray-400">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-400">
            {language}
          </span>
          <CopyButton text={code} />
        </div>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4 modern-scrollbar">
        <Highlight theme={themes.nightOwl} code={code.trim()} language={prismLanguage}>
          {({ className: preClass, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${preClass} text-sm leading-relaxed`}
              style={{ ...style, background: 'transparent', margin: 0, padding: 0 }}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div key={i} {...lineProps} className={`${lineProps.className || ''} table-row`}>
                    {showLineNumbers && (
                      <span className="table-cell select-none pr-4 text-right text-xs text-gray-600">
                        {i + 1}
                      </span>
                    )}
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
