import Navigation from '../../components/Navigation'

const ConstructionSiteRealizations = () => {
  const examples = [
    {
      image: "/api/placeholder/1920/1080",
      legend: "Suivi d'une construction résidentielle"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Suivi d&apos;un chantier d&apos;infrastructure"
    },
    {
      image: "/api/placeholder/1920/1080",
      legend: "Suivi de travaux de rénovation"
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
              Découvrez comment cette technologie moderne et efficace peut améliorer la gestion de vos projets de construction, d&apos;aménagement ou de rénovation.
            </p>
          </div>
        </div>
      </section>

      {/* Explication Section */}
      <section className="py-16 bg-gray-900/50">
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

export default ConstructionSiteRealizations;
