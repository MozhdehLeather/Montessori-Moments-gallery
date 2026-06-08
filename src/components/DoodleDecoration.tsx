import React from "react";

export const CloudSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="currentColor"
    >
      {/* Paper-cut style stacked circles */}
      <path
        d="M 20,40 
           A 15,15 0 0,1 35,20 
           A 18,18 0 0,1 70,20 
           A 15,15 0 0,1 80,42 
           A 12,12 0 0,1 70,55 
           L 25,55 
           A 12,12 0 0,1 20,40 Z"
        stroke="#5a4b3d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Light rosy cheeks cheeks & cute face for paper cut feel */}
      <path d="M 42,34 A 2,2 0 1,1 38,34" fill="none" stroke="#5a4b3d" strokeWidth="2" strokeLinecap="round" />
      <path d="M 58,34 A 2,2 0 1,1 54,34" fill="none" stroke="#5a4b3d" strokeWidth="2" strokeLinecap="round" />
      <path d="M 45,40 Q 48,43 51,40" fill="none" stroke="#5a4b3d" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="37" r="2.5" fill="#f8b4b4" opacity="0.8" />
      <circle cx="62" cy="37" r="2.5" fill="#f8b4b4" opacity="0.8" />
    </svg>
  );
};

export const SunSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="currentColor"
    >
      {/* Squiggly hand-drawn sun rays */}
      <circle cx="40" cy="40" r="18" stroke="#5a4b3d" strokeWidth="2.5" />
      <path d="M 40,15 L 40,5" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 40,65 L 40,75" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 15,40 L 5,40" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 65,40 L 75,40" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      
      <path d="M 22,22 L 15,15" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 58,58 L 65,65" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 22,58 L 15,65" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 58,22 L 65,15" stroke="#5a4b3d" strokeWidth="3" strokeLinecap="round" />

      {/* Cute face */}
      <circle cx="34" cy="36" r="2" fill="#5a4b3d" />
      <circle cx="46" cy="36" r="2" fill="#5a4b3d" />
      <path d="M 37,42 Q 40,45 43,42" fill="none" stroke="#5a4b3d" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
};

export const TreeSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
    >
      {/* Hand sketched trunk */}
      <path
        d="M 45,115 Q 48,80 43,65 L 57,65 Q 52,80 55,115 Z"
        fill="#a78bfa"
        className="fill-amber-700"
        stroke="#5a4b3d"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Storybook leaves bubble */}
      <path
        d="M 50,15 
           C 25,15 20,40 25,55 
           C 15,65 25,82 40,78 
           C 48,88 62,88 68,78 
           C 85,82 85,65 75,55
           C 80,40 75,15 50,15 Z"
        fill="#bbf7d0"
        className="fill-emerald-200"
        stroke="#5a4b3d"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Swirly inner branch line */}
      <path d="M 44,70 Q 48,55 35,45" stroke="#5a4b3d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 54,72 Q 52,60 62,52" stroke="#5a4b3d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50,25 Q 40,35 48,45" stroke="#5a4b3d" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
};

export const FlowerSVG: React.FC<{ className?: string; colorClass?: string }> = ({ className, colorClass = "text-rose-300" }) => {
  return (
    <svg
      viewBox="0 0 60 70"
      className={className}
      fill="currentColor"
    >
      {/* Stem */}
      <path d="M 30,35 Q 32,55 28,68" fill="none" stroke="#5a4b3d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 30,52 Q 20,48 18,44" fill="none" stroke="#5a4b3d" strokeWidth="2" strokeLinecap="round" />
      <path d="M 29,60 Q 38,58 40,52" fill="none" stroke="#5a4b3d" strokeWidth="2" strokeLinecap="round" />
      
      {/* Petals */}
      <g className={colorClass}>
        <circle cx="30" cy="18" r="8" stroke="#5a4b3d" strokeWidth="2.5" />
        <circle cx="42" cy="24" r="8" stroke="#5a4b3d" strokeWidth="2.5" />
        <circle cx="38" cy="36" r="8" stroke="#5a4b3d" strokeWidth="2.5" />
        <circle cx="22" cy="36" r="8" stroke="#5a4b3d" strokeWidth="2.5" />
        <circle cx="18" cy="24" r="8" stroke="#5a4b3d" strokeWidth="2.5" />
      </g>
      {/* Center cap */}
      <circle cx="30" cy="28" r="6" fill="#fef08a" stroke="#5a4b3d" strokeWidth="2.5" />
    </svg>
  );
};

export const BirdSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 40 30"
      className={className}
      fill="none"
      stroke="#5A5A5A"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {/* Hand drawn bird shape */}
      <path d="M 6,18 Q 16,10 24,18 Q 32,10 38,18" />
      <path d="M 24,18 Q 23,24 21,21" strokeWidth="2" />
    </svg>
  );
};

export const StarSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 20,4 L 24,14 L 35,14 L 27,21 L 30,32 L 20,25 L 10,32 L 13,21 L 5,14 L 16,14 Z" />
    </svg>
  );
};

export const BalloonSVG: React.FC<{ className?: string; colorClass?: string }> = ({ className, colorClass = "fill-rose-200" }) => {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="20" cy="22" rx="14" ry="18" className={colorClass} fill="currentColor" />
      <path d="M 20,40 L 17,44 L 23,44 Z" fill="#5A5A5A" />
      <path d="M 20,44 Q 16,50 22,58" />
    </svg>
  );
};

export const KiteSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 20,4 L 34,22 L 20,46 L 6,22 Z" />
      <path d="M 6,22 L 34,22" />
      <path d="M 20,4 L 20,46" />
      <path d="M 20,46 Q 24,52 18,58" />
      {/* Little ribbons on tail */}
      <path d="M 19,51 L 23,53" />
      <path d="M 18,55 L 22,57" />
    </svg>
  );
};

export const ButterflySVG: React.FC<{ className?: string; colorClass?: string }> = ({ className, colorClass = "fill-amber-200" }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round">
      <path d="M 18,10 Q 12,2 8,10 Q 6,18 18,22" className={colorClass} fill="currentColor" />
      <path d="M 22,10 Q 28,2 32,10 Q 34,18 22,22" className={colorClass} fill="currentColor" />
      <path d="M 18,22 Q 13,24 11,28 Q 11,34 18,30" className={colorClass} fill="currentColor" />
      <path d="M 22,22 Q 27,24 29,28 Q 29,34 22,30" className={colorClass} fill="currentColor" />
      <line x1="20" y1="8" x2="20" y2="32" strokeWidth="2.5" />
      <path d="M 20,8 Q 17,4 14,5" />
      <path d="M 20,8 Q 23,4 26,5" strokeLinecap="round" />
    </svg>
  );
};

export const HouseSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 8,24 L 25,10 L 42,24" />
      <rect x="12" y="24" width="26" height="20" />
      <rect x="21" y="32" width="8" height="12" />
      <rect x="16" y="27" width="6" height="6" />
      <rect x="28" y="27" width="6" height="6" />
    </svg>
  );
};

export const RainbowSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round">
      <path d="M 10,35 A 20,20 0 0,1 50,35" stroke="#FFA7C4" strokeWidth="3" />
      <path d="M 15,35 A 15,15 0 0,1 45,35" stroke="#FFD66B" strokeWidth="3" />
      <path d="M 20,35 A 10,10 0 0,1 40,35" stroke="#78B7FF" strokeWidth="3" />
    </svg>
  );
};

export const PencilSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round">
      <g transform="rotate(45 20 20)">
        <polygon points="12,32 8,36 12,36 16,32" fill="#5A5A5A" />
        <rect x="15" y="10" width="10" height="22" rx="1" />
        <polygon points="15,10 20,2 25,10" />
      </g>
    </svg>
  );
};

export const CrayonSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round">
      <g transform="rotate(60 20 20)">
        <rect x="16" y="12" width="8" height="20" rx="1.5" />
        <path d="M 16,12 L 20,5 L 24,12 Z" />
        <path d="M 16,24 L 24,24" />
      </g>
    </svg>
  );
};

export const ABCBlockSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="32" height="32" rx="4" />
      {/* Hand drawn letter A */}
      <path d="M 14,28 L 20,12 L 26,28" />
      <path d="M 17,22 L 23,22" />
    </svg>
  );
};

