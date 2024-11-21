'use client'

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation'
import Link from 'next/link';

const images = [
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/topographie1.jpg",
  "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/topographie2.jpg"
];

const TopographiePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
                alt={`Topographie ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Topographie & Modélisation 3D
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Création de cartes précises et modèles 3D haute définition grâce à nos drones équipés 
              des dernières technologies de capture d&apos;images aériennes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link 
                href="/devis" 
                className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
              >
                Demander un devis
              </Link>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                En savoir plus
              </button>
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Nos Services de Topographie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cartographie Aérienne",
                description: "Création de cartes détaillées à partir d'images aériennes haute résolution pour une vision précise de votre terrain.",
                details: [
                  "Cartes topographiques précises",
                  "Mesures de surface et de volume",
                  "Analyse du terrain en haute définition",
                  "Export dans différents formats"
                ]
              },
              {
                title: "Modélisation 3D",
                description: "Génération de modèles 3D complets de vos structures et terrains pour une visualisation interactive.",
                details: [
                  "Modèles 3D texturés",
                  "Maquettes numériques",
                  "Visualisation interactive",
                  "Analyses volumétriques"
                ]
              },
              {
                title: "Orthophotographie",
                description: "Production d'images géoréférencées à l'échelle pour des mesures et analyses précises.",
                details: [
                  "Images haute résolution",
                  "Géoréférencement précis",
                  "Mosaïques d'images",
                  "Analyses multispectrales"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Études Géographiques",
                description: "Analyses topographiques détaillées pour la planification et l'aménagement du territoire.",
                applications: [
                  "Études d'impact environnemental",
                  "Planification urbaine",
                  "Gestion des ressources naturelles",
                  "Analyses du terrain"
                ]
              },
              {
                title: "Projets d'Aménagement",
                description: "Visualisation 3D pour l'urbanisme et le développement immobilier.",
                applications: [
                  "Modélisation de projets",
                  "Études de faisabilité",
                  "Simulation d'intégration",
                  "Suivi de chantier"
                ]
              },
              {
                title: "Gestion de Sites",
                description: "Suivi et gestion des chantiers et sites industriels complexes.",
                applications: [
                  "Surveillance de l'évolution",
                  "Calculs de volumes",
                  "Inspections régulières",
                  "Plans d'intervention"
                ]
              },
              {
                title: "Patrimoine",
                description: "Documentation et préservation du patrimoine architectural et historique.",
                applications: [
                  "Modélisation de monuments",
                  "Documentation historique",
                  "Plans de restauration",
                  "Archives numériques"
                ]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{app.title}</h3>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.applications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Caractéristiques Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                value: "2cm/px",
                label: "Résolution",
                detail: "Précision exceptionnelle pour des détails nets et une cartographie ultra-précise de vos terrains"
              },
              {
                value: "99%",
                label: "Précision",
                detail: "Mesures fiables et exactes garantissant une qualité professionnelle pour vos projets"
              },
              {
                value: "4K",
                label: "Qualité Vidéo",
                detail: "Images ultra-haute définition permettant une analyse détaillée de chaque élément"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all backdrop-blur-sm border border-blue-500/20"
              >
                <div className="text-4xl font-bold text-blue-300 mb-4">{stat.value}</div>
                <div className="text-xl text-gray-300 font-semibold mb-4">{stat.label}</div>
                <div className="text-base text-gray-400 leading-relaxed">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Notre Processus</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Planification",
                description: "Analyse des besoins et définition du plan de vol",
                details: "Étude approfondie du site, définition des objectifs, choix des équipements adaptés"
              },
              {
                step: "02",
                title: "Acquisition",
                description: "Capture des données aériennes par drone",
                details: "Vol automatisé, capture d'images haute résolution, contrôle qualité en temps réel"
              },
              {
                step: "03",
                title: "Traitement",
                description: "Génération des modèles 3D et orthophotos",
                details: "Traitement photogrammétrique, création de nuages de points, texturation des modèles"
              },
              {
                step: "04",
                title: "Livraison",
                description: "Remise des livrables et accompagnement",
                details: "Export dans les formats souhaités, formation à l'utilisation, support technique"
              }
            ].map((process, index) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="text-4xl font-bold text-blue-400">{process.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                  <p className="text-gray-500 mt-2 text-sm">{process.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Prêt à cartographier votre projet ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Découvrez la précision et la qualité de nos services de topographie et modélisation 3D.
            Nos experts sont là pour vous accompagner dans la réalisation de vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/devis" 
              className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
            >
              Demander un devis
            </Link>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
      <div id="bas">
        {/* Contenu en bas de la page */}
      </div>
    </div>
  );
};

export default TopographiePage;
