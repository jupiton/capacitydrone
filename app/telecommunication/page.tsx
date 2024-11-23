'use client'

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'
import ActionButtons from '../components/ActionButtons';
import Link from 'next/link';

const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/servicetelecommunication1.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/servicetelecommunication2.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/servicetelecommunication3.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/servicetelecommunication4.png"
];

const TelecomDroneApplications = () => {
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
                    : 'opacity-0 scale-105'}`}
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
              Télécommunication Visée FH & Jumeaux Numériques Panoramiques 360° par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              La télécommunication visée FH (Fréquences Hautes) et la création de jumeaux numériques panoramiques à 360° par drone sont des technologies avancées qui permettent d&apos;optimiser l&apos;infrastructure des réseaux de télécommunications.
            </p>
            <ActionButtons/>
          </div>
        </div>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentImageIndex 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicateur de défilement */}
        <a href="#process" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
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

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Télécommunication Visée FH (Fréquences Hautes) par Drone</h2>
          <div className="max-w-5xl mx-auto">
            <div className="p-8 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <p className="text-gray-400 text-lg leading-relaxed">
                Les fréquences hautes (FH) sont utilisées dans les réseaux de télécommunications pour fournir des connexions à haut débit sur de longues distances. La &quot;visée FH&quot; fait référence à la mise en place et à l&apos;alignement de ces liens de communication, qui sont essentiels pour les réseaux de données, notamment dans les zones éloignées ou difficiles d&apos;accès.
              </p>
            </div>
          </div>
        </div>
        
      </section>

      {/* Process Section */}
      <section id="avantages" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Jumeaux Numériques Panoramiques 360° par Drone</h2>
          <div className="max-w-5xl mx-auto">
            <div className="p-8 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <p className="text-gray-400 text-lg leading-relaxed">
              Les jumeaux numériques sont des répliques virtuelles d&apos;objets physiques ou d&apos;environnements réels. Créés à partir de données collectées par drones, ces modèles numériques permettent une visualisation et une simulation en temps réel, facilitant l&apos;analyse et la gestion des sites. Le concept de panoramique 360° permet de capturer une vue complète à 360 degrés de l&apos;environnement, donnant une perspective immersive du site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Des Solutions Complètes pour les Télécommunications
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            L&apos;inspection par drone et la création de jumeaux numériques panoramiques 360° sont des outils puissants pour les opérateurs de télécommunications souhaitant optimiser la gestion et la maintenance de leurs infrastructures. Grâce à ces technologies, les entreprises peuvent améliorer la qualité de service et garantir la pérennité de leurs installations, tout en restant compétitives dans un secteur en constante évolution.
          </p>
          <ActionButtons/>
        </div>
      </section>
    </div>
  );
};

export default TelecomDroneApplications;
