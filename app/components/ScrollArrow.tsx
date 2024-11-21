'use client';

import React from 'react';

const ScrollArrow = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <button 
        onClick={scrollToForm}
        className="cursor-pointer"
      >
        <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all">
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
    </div>
  );
};

export default ScrollArrow; 