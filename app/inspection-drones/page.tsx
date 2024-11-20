import Navigation from '../components/Navigation'
import Link from 'next/link';

const DroneInspection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Inspection par Drone"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Inspections & Surveillance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Une technique moderne permettant d&apos;effectuer des vérifications visuelles et techniques sur des structures ou des sites difficiles d&apos;accès, tout en garantissant une sécurité accrue et des coûts réduits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </button>
              <Link 
                href="/devis" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Comment fonctionne l&apos;inspection par drone ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Préparation du vol</h3>
              <p className="text-gray-400">
                Avant l&apos;inspection, un plan de vol est établi pour déterminer les zones à survoler, la hauteur de vol et les angles de prise de vue nécessaires.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Lancement du drone</h3>
              <p className="text-gray-400">
                Le drone est lancé pour survoler la structure ou la zone à inspecter, tout en suivant le parcours défini. En fonction de l&apos;équipement à bord, il capte des images ou des vidéos en temps réel.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Collecte des données</h3>
              <p className="text-gray-400">
                Les images et vidéos sont transmises en direct au technicien au sol ou stockées pour une analyse ultérieure.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Analyse des résultats</h3>
              <p className="text-gray-400">
                Les données collectées sont analysées pour détecter des signes de dégradation, des anomalies ou des besoins d&apos;entretien, incluant fissures, humidité, corrosion.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Rapport détaillé</h3>
              <p className="text-gray-400">
                Un rapport d&apos;inspection est généré, incluant les images, vidéos et informations pertinentes pour planifier la maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Avantages de l&apos;inspection par drone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Accès et Sécurité</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Inspection des zones difficiles d&apos;accès</li>
                <li>Réduction des risques en hauteur</li>
                <li>Limitation des échafaudages et nacelles</li>
                <li>Protection des équipes humaines</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Rapidité et Coût</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Inspection rapide des grandes surfaces</li>
                <li>Réduction des coûts opérationnels</li>
                <li>Moins de personnel nécessaire</li>
                <li>Évitement d&apos;équipements coûteux</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
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
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Applications Courantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Bâtiments et Infrastructures</h3>
              <p className="text-gray-400">
                Inspection de toitures, façades, ponts, chemins de fer, viaducs, tunnels, et autres structures complexes nécessitant une surveillance régulière.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Énergie et Télécommunications</h3>
              <p className="text-gray-400">
                Surveillance des éoliennes, des lignes électriques, panneaux solaires et antennes relais. Vérification des pylônes et infrastructures énergétiques.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Une Solution Moderne et Efficace</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
            L&apos;inspection par drone est une méthode efficace, rapide et sécuritaire pour effectuer des contrôles réguliers et des évaluations détaillées. Grâce à cette technologie, les entreprises peuvent réduire leurs coûts d&apos;entretien, détecter les problèmes à un stade précoce, et garantir une gestion proactive de leurs infrastructures.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Prêt à moderniser vos inspections ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Découvrez comment notre expertise en inspection par drone peut optimiser votre maintenance tout en réduisant vos coûts et en améliorant la sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneInspection;
