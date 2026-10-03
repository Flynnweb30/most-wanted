import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showWordmark?: boolean;
  variant?: 'dark' | 'light';
}

export default function Logo({
  className = '',
  size = 'md',
  showWordmark = true,
  variant = 'dark',
}: LogoProps) {
  const heights = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
    xl: 'h-14',
    hero: 'h-16 sm:h-20 md:h-24',
  };

  const isLight = variant === 'light';
  const logoSrc = isLight ? '/logo.png' : '/logo_black.png';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Base Logo extracted from the official logo set */}
      <div className={`relative ${heights[size]} flex items-center justify-center`}>
        <img
          src={logoSrc}
          alt="Most Wanted Agency"
          className="h-full w-auto object-contain"
          loading="eager"
        />
      </div>

      {showWordmark && size !== 'hero' && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-lg sm:text-xl font-black tracking-tighter uppercase font-display flex items-center gap-0.5 ${
              isLight ? 'text-white' : 'text-black'
            }`}
          >
            MOST WANTED<span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>.</span>
          </span>
          <span
            className={`text-[9px] font-bold tracking-[0.24em] uppercase mt-0.5 font-mono ${
              isLight ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
}
