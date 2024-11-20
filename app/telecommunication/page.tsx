import Navigation from '../components/Navigation'
import Link from 'next/link';

const TelecomDroneApplications = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Télécommunication Drone Inspection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Télécommunication Visée FH & Jumeaux Numériques Panoramiques 360° par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              La télécommunication visée FH (Fréquences Hautes) et la création de jumeaux numériques panoramiques à 360° par drone sont des technologies avancées qui permettent d&apos;optimiser l&apos;infrastructure des réseaux de télécommunications et de faciliter la gestion et la maintenance des sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir les solutions
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Découvrir les solutions
            </button>
            <Link 
              href="/devis" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelecomDroneApplications;
