import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Main circuit pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Circuit connections */}
              <path
                d="M20 0v20 M40 0v20 M60 0v20 M80 0v20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <path
                d="M0 20h20 M0 40h20 M0 60h20 M0 80h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              {/* Circuit nodes */}
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />
              <circle cx="60" cy="60" r="1.5" fill="currentColor" />
              <circle cx="80" cy="80" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#circuit-pattern)"
            className="animate-pan"
          />
        </svg>
      </div>

      {/* Floating hardware icons */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        {/* Arduino */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <svg className="w-12 h-12" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"
            />
          </svg>
        </div>
        {/* Resistor */}
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <rect x="4" y="10" width="16" height="4" rx="1" fill="currentColor" />
            <rect x="2" y="11" width="2" height="2" fill="currentColor" />
            <rect x="20" y="11" width="2" height="2" fill="currentColor" />
          </svg>
        </div>
        {/* LED */}
        <div className="absolute bottom-1/4 left-1/3 animate-float">
          <svg className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill="currentColor" />
            <rect x="11" y="18" width="2" height="4" fill="currentColor" />
          </svg>
        </div>
        {/* Microchip */}
        <div className="absolute top-2/3 right-1/3 animate-float-delayed">
          <svg className="w-14 h-14" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
            <rect x="2" y="10" width="2" height="4" fill="currentColor" />
            <rect x="20" y="10" width="2" height="4" fill="currentColor" />
            <rect x="10" y="2" width="4" height="2" fill="currentColor" />
            <rect x="10" y="20" width="4" height="2" fill="currentColor" />
          </svg>
        </div>
        {/* Capacitor */}
        <div className="absolute bottom-1/3 left-1/5 animate-float">
          <svg className="w-9 h-9" viewBox="0 0 24 24">
            <rect x="7" y="7" width="2" height="10" fill="currentColor" />
            <rect x="15" y="7" width="2" height="10" fill="currentColor" />
          </svg>
        </div>
        {/* Battery */}
        <div className="absolute top-1/5 left-2/3 animate-float-delayed">
          <svg className="w-10 h-10" viewBox="0 0 24 24">
            <rect x="6" y="8" width="12" height="8" rx="2" fill="currentColor" />
            <rect x="10" y="4" width="4" height="2" fill="currentColor" />
          </svg>
        </div>
        {/* Breadboard */}
        <div className="absolute bottom-1/5 right-1/4 animate-float">
          <svg className="w-14 h-8" viewBox="0 0 32 16">
            <rect x="2" y="2" width="28" height="12" rx="2" fill="currentColor" />
            <rect x="6" y="6" width="20" height="4" rx="1" fill="#fff" fillOpacity="0.3" />
          </svg>
        </div>
        {/* Oscilloscope */}
        <div className="absolute top-1/2 left-1/6 animate-float-delayed">
          <svg className="w-12 h-10" viewBox="0 0 32 24">
            <rect x="2" y="4" width="28" height="16" rx="3" fill="currentColor" />
            <polyline points="6,16 10,8 14,16 18,8 22,16 26,8" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground; 