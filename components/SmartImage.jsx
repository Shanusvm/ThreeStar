'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ToolIcon } from './Icons';

/**
 * next/image with a graceful, on-brand fallback.
 * If the remote photo 404s or is blocked, we render a navy/gold tile instead of a broken image.
 */
export default function SmartImage({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  className = '',
  fallbackLabel,
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-light via-navy to-navy-dark">
        <ToolIcon className="h-9 w-9 text-gold/80" />
        {fallbackLabel ? (
          <span className="px-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60">
            {fallbackLabel}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
