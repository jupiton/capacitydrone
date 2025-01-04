'use client'

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation'
import Link from 'next/link';
import ScrollArrow from '../../components/ScrollArrow';


const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier1.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier2.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier3.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier4.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier5.png"
];
const ChantierPage = () => {
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
      {/* Hero Section */}
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
                alt={`Chantier ${index + 1}`}
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
              Suivi de Chantier
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Suivez l'évolution de vos chantiers avec précision grâce à nos solutions de surveillance par drone
            </p>
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
        <ScrollArrow targetId="section-detail"/>
      </section>

      {/* Explication Section */}
      <section id="section-detail" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Comment fonctionne le suivi de chantier par drone ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                Le suivi de chantier par drone utilise des drones équipés de caméras haute définition pour capturer des images régulières du site en construction. Ces images permettent aux responsables de projet de suivre l&apos;avancement des travaux en temps réel, de vérifier la conformité avec les plans et de détecter rapidement tout problème.
              </p>
              <p className="text-gray-400">
                La solution comprend une planification des vols, la prise de photos à différents angles et intervalles, ainsi que la mise à jour régulière d&apos;un système de suivi. Cela offre une visibilité complète sur l&apos;évolution du chantier.
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-4">
                Les principaux avantages de cette approche sont le suivi en temps réel, les gains de temps, la documentation détaillée et la facilité de gestion des incidents. Les photos peuvent également être analysées pour comparer l&apos;évolution, suivre les délais et créer des modèles 3D immersifs.
              </p>
              <p className="text-gray-400">
                Le suivi de chantier par drone devient un outil incontournable pour une gestion optimale des projets de construction, d&apos;aménagement et de rénovation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Conclusion Section */}
      <section className="py-16 text-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Prêt à exploiter le plein potentiel de vos chantiers ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Le suivi de chantier par drone offre une visibilité complète sur l&apos;évolution des travaux, combinant gain de temps, réduction des coûts et amélioration de la qualité de suivi. Découvrez comment cette solution peut vous aider à garantir la réussite de vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              En savoir plus
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChantierPage;
