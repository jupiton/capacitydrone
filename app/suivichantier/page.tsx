'use client'

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'
import ActionButtons from '../components/ActionButtons';
import ScrollArrow from '../components/ScrollArrow';
import Link from 'next/link';

const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier1.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier2.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier3.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier4.png",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/chantier5.png"
];

const SuiviChantierPage = () => {
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
        <ScrollArrow />
      </section>

      {/* Fonctionnement Section */}
      <section id="section-detail" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Fonctionnement du Suivi de Chantier par Drone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Planification des Vols</h3>
              <p className="text-gray-400">
                Définition des zones clés à surveiller, de la fréquence des prises de vues et du parcours de vol pour couvrir l&apos;ensemble du chantier.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Prise de Photos Régulières</h3>
              <p className="text-gray-400">
                Capture d&apos;images aériennes à intervalles réguliers, sous différents angles et altitudes pour offrir une vue complète du chantier.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Mise à Jour Régulière</h3>
              <p className="text-gray-400">
                Intégration des photos dans un système de suivi, avec des mises à jour à intervalles réguliers ou à la demande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Avantages du Suivi de Chantier par Drone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi Précis et en Temps Réel</h3>
              <p className="text-gray-400">
                Vérification de l&apos;avancement par rapport au planning, identification rapide des problèmes ou retards, et contrôle de la conformité des travaux.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Gains de Temps et Réduction des Déplacements</h3>
              <p className="text-gray-400">
                Inspections de chantier beaucoup plus rapides que les méthodes traditionnelles, permettant de consacrer plus de temps à la gestion du projet.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Documentation Complète et Archives</h3>
              <p className="text-gray-400">
                Historique visuel du chantier, utile pour les rapports, les audits et la présentation de l&apos;avancement aux parties prenantes.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Facilité de Gestion des Incidents</h3>
              <p className="text-gray-400">
                Identification rapide des anomalies ou problèmes de sécurité, permettant une prise de mesures correctives efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exploitation des Photos Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Exploitation des Photos pour l'Analyse et la Planification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Comparaison de l'Évolution</h3>
              <p className="text-gray-400">
                Superposition des photos prises à différents moments pour observer les changements dans la structure du chantier.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi des Délais</h3>
              <p className="text-gray-400">
                Comparaison des photos avec le calendrier du projet pour identifier les écarts par rapport aux délais prévus.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Création de Modèles 3D</h3>
              <p className="text-gray-400">
                Génération de modèles 3D du chantier à partir des images, offrant une visualisation immersive de l&apos;évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Spécifiques Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Exemples d'Applications Spécifiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi de Construction Résidentielle</h3>
              <p className="text-gray-400">
                Surveillance de l&apos;évolution des travaux de fondation, de structure et de toiture pour vérifier le respect des normes.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi de Grands Projets d&apos;Infrastructure</h3>
              <p className="text-gray-400">
                Capture d&apos;images précises et régulières pour suivre l&apos;avancement des travaux de terrassement, de construction des fondations ou de pose des structures.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi de Rénovations</h3>
              <p className="text-gray-400">
                Documentation des progrès et détection des problèmes pendant l&apos;exécution des travaux de rénovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rapports d'Avancement Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Rendu des Rapports d'Avancement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Captures d&apos;Écran et Annotations</h3>
              <p className="text-gray-400">
                Intégration des photos prises par drone dans des rapports, avec des commentaires sur les aspects spécifiques du chantier.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Comparaisons et Suggestions</h3>
              <p className="text-gray-400">
                Comparaisons entre les photos pour montrer l&apos;évolution du chantier et propositions d&apos;actions correctives ou d&apos;ajustements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gray-900/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Une Solution Incontournable pour la Gestion de Chantier
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Le suivi de chantier par drone, avec la prise de photos régulières, offre une visibilité complète sur l&apos;évolution des travaux. Cette méthode permet de garantir la bonne gestion et la réussite d&apos;un projet de construction, en combinant gain de temps, réduction des coûts et amélioration de la qualité de suivi.
          </p>
          <ActionButtons/>
        </div>
      </section>
    </div>
  );
};

export default SuiviChantierPage;
