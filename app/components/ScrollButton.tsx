'use client';

import React from 'react';

const ScrollButton = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <button 
      onClick={scrollToForm}
      className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
    >
      Envoyer un message
    </button>
  );
};

export default ScrollButton; 