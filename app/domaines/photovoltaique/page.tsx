'use client'

import Navigation from '../../components/Navigation'
import ScrollArrow from '../../components/ScrollArrow';

const ThermalInspectionExplained = () => {
  const examples = [
    {
      image: "/api/placeholder/1920/1080",
      legend: "Inspection d'une centrale photovoltaïque"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Inspection d'ombrières photovoltaïques"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Inspection de toitures équipées de panneaux solaires"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section avec vidéo */}
      <Navigation />
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

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Inspection de Sites Photovoltaïques et Toitures par Drone avec Caméra Thermique
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment cette solution innovante peut améliorer l&apos;évaluation de l&apos;état et la maintenance de vos infrastructures photovoltaïques et de vos toitures.
            </p>
          </div>
        </div>

        <ScrollArrow />
      </section>

      {/* Explication Section */}
      <section id="section-detail" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Comment fonctionne l&apos;inspection par drone avec caméra thermique ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                L&apos;inspection de centrales photovoltaïques, ombrières et toitures à l&apos;aide de drones équipés de caméras thermiques permet de détecter rapidement les anomalies, les dégradations ou les défaillances sans mobiliser d&apos;équipes au sol. Les drones survolent les installations et captent des images haute résolution, tandis que les caméras thermiques identifient les différences de température à la surface des matériaux.
              </p>
              <p className="text-gray-400">
                Cette approche est particulièrement adaptée pour inspecter les cellules solaires, le câblage électrique et les structures des ombrières photovoltaïques et des toitures équipées de panneaux solaires. Les points chauds et froids détectés permettent de diagnostiquer les problèmes potentiels.
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-4">
                Les principaux avantages de cette solution sont l&apos;amélioration de la sécurité, la rapidité d&apos;exécution, l&apos;accès à des zones difficiles et la précision des inspections grâce à la thermographie. Cela permet de réduire les coûts d&apos;entretien et de maintenance en détectant les problèmes à un stade précoce.
              </p>
              <p className="text-gray-400">
                Les rapports d&apos;inspection détaillés, incluant la cartographie thermique, l&apos;analyse visuelle et des recommandations, aident les entreprises à prendre des décisions éclairées pour optimiser la performance et la durée de vie de leurs installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Optimiser la performance et la sécurité de vos infrastructures
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            L&apos;inspection de centrales photovoltaïques, ombrières et toitures par drone avec caméra thermique est une solution moderne, rapide et précise qui vous permettra de détecter les problèmes, d&apos;améliorer la maintenance et de réduire les coûts à long terme. Découvrez comment cette approche peut bénéficier à vos installations.
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

export default ThermalInspectionExplained;
