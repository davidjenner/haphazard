import React from 'react';

export function Logo() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF1F8F' }} />
          <stop offset="100%" style={{ stopColor: '#FF6B6B' }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#brainGradient)"
        d="M85,50c0,19.33-15.67,35-35,35s-35-15.67-35-35s15.67-35,35-35S85,30.67,85,50z M35,50 c0,8.28,6.72,15,15,15s15-6.72,15-15s-6.72-15-15-15S35,41.72,35,50z M60,50c0,5.52-4.48,10-10,10s-10-4.48-10-10s4.48-10,10-10 S60,44.48,60,50z"
      />
    </svg>
  );
}