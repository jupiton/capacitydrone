'use client'

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'
import ActionButtons from '../components/ActionButtons';
import ScrollArrow from '../components/ScrollArrow';
import Link from 'next/link';

const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/inspection1.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/inspection2.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/inspection3.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/inspection4.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/inspection5.png"
];

const DroneInspection = () => {
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
                alt={`Inspection ${index + 1}`}
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
              Inspections & Surveillance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Une technique moderne permettant d&apos;effectuer des vérifications visuelles et techniques sur des structures ou des sites difficiles d&apos;accès, tout en garantissant une sécurité accrue et des coûts réduits.
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

        <ScrollArrow />
      </section>

      {/* Process Section */}
      <section id="section-detail" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Comment fonctionne l&apos;inspection par drone ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Préparation du vol</h3>
              <p className="text-gray-400">
                Avant l&apos;inspection, un plan de vol est établi pour déterminer les zones à survoler, la hauteur de vol et les angles de prise de vue nécessaires.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Lancement du drone</h3>
              <p className="text-gray-400">
                Le drone est lancé pour survoler la structure ou la zone à inspecter, tout en suivant le parcours défini. En fonction de l&apos;équipement à bord, il capte des images ou des vidéos en temps réel.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Collecte des données</h3>
              <p className="text-gray-400">
                Les images et vidéos sont transmises en direct au technicien au sol ou stockées pour une analyse ultérieure.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Analyse des résultats</h3>
              <p className="text-gray-400">
                Les données collectées sont analysées pour détecter des signes de dégradation, des anomalies ou des besoins d&apos;entretien, incluant fissures, humidité, corrosion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Avantages de l&apos;inspection par drone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Accès et Sécurité</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Inspection des zones difficiles d&apos;accès</li>
                <li>Réduction des risques en hauteur</li>
                <li>Limitation des échafaudages et nacelles</li>
                <li>Protection des équipes humaines</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Rapidité et Coût</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Inspection rapide des grandes surfaces</li>
                <li>Réduction des coûts opérationnels</li>
                <li>Moins de personnel nécessaire</li>
                <li>Évitement d&apos;équipements coûteux</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Précision et Analyse</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Données visuelles détaillées</li>
                <li>Technologies spécialisées (thermographie, LiDAR)</li>
                <li>Détection précoce des problèmes</li>
                <li>Documentation de haute qualité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Applications Courantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Bâtiments et Infrastructures</h3>
              <p className="text-gray-400">
                Inspection de toitures, façades, ponts, chemins de fer, viaducs, tunnels, et autres structures complexes nécessitant une surveillance régulière.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Énergie et Télécommunications</h3>
              <p className="text-gray-400">
                Surveillance des éoliennes, des lignes électriques, panneaux solaires et antennes relais. Vérification des pylônes et infrastructures énergétiques.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Industrie et Environnement</h3>
              <p className="text-gray-400">
                Inspection des pipelines, réservoirs, raffineries. Surveillance des barrages, digues, forêts et sites pollués pour la détection des risques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Une Solution Moderne et Efficace</h2>
          <p className="text-xl text-gray-400 mb-8">
            L&apos;inspection par drone est une méthode efficace, rapide et sécuritaire pour effectuer des contrôles réguliers et des évaluations détaillées. Grâce à cette technologie, les entreprises peuvent réduire leurs coûts d&apos;entretien, détecter les problèmes à un stade précoce, et garantir une gestion proactive de leurs infrastructures.
          </p>
          <ActionButtons/>
        </div>
      </section>
    </div>
  );
};

export default DroneInspection;
