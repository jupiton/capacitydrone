import Navigation from '../../components/Navigation'

const TelecomDroneApplications = () => {
  const examples = [
    {
      image: "/api/placeholder/1920/1080",
      legend: "Inspection d&apos;un site de télécommunication avec drone"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Création de jumeaux numériques 360° pour visualisation"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Maintenance prédictive grâce aux données des drones"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Télécommunication Drone Applications"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Télécommunication Visée FH & Jumeaux Numériques Panoramiques 360° par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              La télécommunication visée FH (Fréquences Hautes) et la création de jumeaux numériques panoramiques à 360° par drone sont des technologies avancées qui permettent d&apos;optimiser l&apos;infrastructure des réseaux de télécommunications et de faciliter la gestion et la maintenance des sites.
            </p>
          </div>
        </div>
      </section>

      {/* Explication Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Explications des Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                La &quot;visée FH&quot; fait référence à la mise en place et à l&apos;alignement des liens de communication à haute fréquence, essentiels pour les réseaux de données, notamment dans les zones éloignées ou difficiles d&apos;accès. Les drones permettent d&apos;assurer un alignement précis des antennes, de surveiller à distance les sites de transmission et de collecter des données techniques.
              </p>
              <p className="text-gray-400">
                Les jumeaux numériques panoramiques 360° créés à partir de données de drones offrent une visualisation et une simulation en temps réel des sites, facilitant l&apos;analyse et la gestion des infrastructures de télécommunications.
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-4">
                Ces technologies combinées permettent une meilleure gestion des infrastructures, une installation plus précise des équipements, une maintenance prédictive et une optimisation du déploiement des réseaux.
              </p>
              <p className="text-gray-400">
                Les principaux avantages sont l&apos;efficacité, la réduction des coûts, l&apos;accessibilité à des zones difficiles et la qualité des données collectées, offrant ainsi une gestion plus efficace et une meilleure anticipation des problèmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Exemples de Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="text-center">
                <img src={example.image} alt={`Exemple ${index + 1}`} className="rounded-xl" />
                <p className="text-gray-400 mt-2">{example.legend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center bg-gray-900/50">
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
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelecomDroneApplications;
