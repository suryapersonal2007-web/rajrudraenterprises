import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'emblemOnly';
  className?: string;
  isLightBg?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  isLightBg = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Metallic RRE Emblem */}
      <div className="relative shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-[#1C1D1A] to-[#10110F] border border-[#C89536]/40 p-1 flex items-center justify-center shadow-lg shadow-black/40 group">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#C89536] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Geometric Shield Border */}
          <polygon
            points="50,6 92,25 92,75 50,94 8,75 8,25"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Roof Gable Contour (Under One Roof) */}
          <path
            d="M24 40 L50 20 L76 40"
            stroke="#E4BD70"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Electrical Bolt & Water Droplet Intersect */}
          {/* Water Droplet (Left) */}
          <path
            d="M38 52 C38 46 44 40 44 36 C44 40 50 46 50 52 C50 56 46 59 44 59 C41 59 38 56 38 52 Z"
            fill="#E4BD70"
            opacity="0.85"
          />

          {/* Electrical Lightning Spark (Right) */}
          <path
            d="M56 36 L48 50 L56 50 L50 66 L64 48 L56 48 Z"
            fill="#C89536"
          />

          {/* RRE Monogram at the Base */}
          <text
            x="50"
            y="84"
            textAnchor="middle"
            fill="#F5F0E7"
            fontSize="14"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            letterSpacing="2"
          >
            RRE
          </text>

          {/* Metallic Gradients */}
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5F0E7" />
              <stop offset="0.5" stopColor="#E4BD70" />
              <stop offset="1" stopColor="#C89536" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'emblemOnly' && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-heading text-base md:text-lg font-bold tracking-tight uppercase leading-none ${
              isLightBg ? 'text-[#10110F]' : 'text-[#F5F0E7]'
            }`}
          >
            RAJ RUDRA <span className="text-[#C89536]">ENTERPRISES</span>
          </span>
          {variant === 'full' && (
            <span
              className={`text-[10px] md:text-[11px] tracking-wider uppercase font-medium mt-1 ${
                isLightBg ? 'text-[#555]' : 'text-[#96958F]'
              }`}
            >
              Bathroom · Electrical · Lighting
            </span>
          )}
        </div>
      )}
    </div>
  );
};
