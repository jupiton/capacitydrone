'use client'

import { useState } from 'react';
import Navigation from '../../components/Navigation'
import Link from 'next/link';

const PhotovoltaiquePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section avec vidéo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Vidéo en arrière-plan */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source 
              src="https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/photovoltaique.mp4" 
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Inspection Photovoltaïque
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Optimisez la performance de vos installations solaires grâce à nos inspections par drone équipé de caméras thermiques haute précision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/devis">
                <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                  Demander un devis
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <a href="#services" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
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
        </a>
      </section>
    </div>
  );
};

export default PhotovoltaiquePage;
