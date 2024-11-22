'use client'

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation'
import Link from 'next/link';

const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/te%CC%81le%CC%81communication1.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/te%CC%81le%CC%81communication2.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/te%CC%81le%CC%81communication3.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/te%CC%81le%CC%81communication4.png"
];

const TelecommunicationPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section avec carrousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Carrousel en arrière-plan */}
          <div className="relative h-full w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Télécommunication ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out transform
                  ${index === currentImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-110'
                  }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Inspection Télécommunication
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Inspectez vos antennes et infrastructures de télécommunication avec précision grâce à nos solutions par drone.
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

          {/* Indicateurs de slide */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentImageIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelecommunicationPage;
