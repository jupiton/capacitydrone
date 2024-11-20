import Navigation from '../components/Navigation'
import Link from 'next/link';

const FollowUpSiteMonitoring = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Suivi de Chantier par Drone"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Suivi de Chantier par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Optimisez la gestion de vos projets de construction grâce à des inspections aériennes régulières et des rapports détaillés.
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
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center">Comment fonctionne le suivi de chantier par drone ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Fonctionnement Section */}
      <section className="py-16 bg-gray-900/50">
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
      <section className="py-16">
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
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Exploitation des Photos pour l&apos;Analyse et la Planification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Comparaison de l&apos;Évolution</h3>
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Exemples d&apos;Applications Spécifiques</h2>
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

      {/* Rapports d&apos;Avancement Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Rendu des Rapports d&apos;Avancement</h2>
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
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Une Solution Incontournable pour la Gestion de Chantier
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Le suivi de chantier par drone, avec la prise de photos régulières, offre une visibilité complète sur l&apos;évolution des travaux. Cette méthode permet de garantir la bonne gestion et la réussite d&apos;un projet de construction, en combinant gain de temps, réduction des coûts et amélioration de la qualité de suivi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Découvrir la solution
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

export default FollowUpSiteMonitoring;
