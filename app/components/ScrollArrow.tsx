'use client';

import React from 'react';

interface ScrollArrowProps {
  targetId: string;
}

const ScrollArrow = ({ targetId }: ScrollArrowProps) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      aria-label="Défiler vers le bas"
    >
      <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full">
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </button>
  );
};

export default ScrollArrow; 