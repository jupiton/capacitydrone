import Navigation from './components/Navigation';

const Home = () => {

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
    
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                CAPACITY DRONE
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">L'accès à l'inaccessible</p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre partenaire expert en solutions de drones professionnelles pour des missions variées : 
              inspections industrielles, cartographie, surveillance, détection thermique et bien plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Drones Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Nos Drones
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Technologie de pointe pour des résultats inégalés
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Matrice 350 RTK",
                subtitle: "Précision et robustesse",
                description: "L'un des drones les plus avancés de DJI, conçu pour des missions complexes dans des environnements extrêmes.",
                features: [
                  "Inspections de grande envergure",
                  "Cartographie et modélisation 3D",
                  "Opérations de sécurité",
                  "Précision millimétrique RTK"
                ]
              },
              {
                title: "Mavic 3 Enterprise",
                subtitle: "Polyvalence et performance",
                description: "Drone professionnel polyvalent, compact et ultra-performant pour des missions variées.",
                features: [
                  "Inspection de bâtiments",
                  "Surveillance de sites sensibles",
                  "Gestion de crises",
                  "Stabilité exceptionnelle"
                ]
              },
              {
                title: "Mavic 3 Thermal",
                subtitle: "Détection thermique avancée",
                description: "Spécialement conçu pour l'analyse thermique de haute précision.",
                features: [
                  "Surveillance thermique",
                  "Recherche et sauvetage",
                  "Surveillance environnementale",
                  "Agriculture de précision"
                ]
              }
            ].map((drone, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-bold mb-2 text-blue-300">{drone.title}</h3>
                <p className="text-lg text-blue-300/80 mb-4">{drone.subtitle}</p>
                <img
                  src="/api/placeholder/400/300"
                  alt={drone.title}
                  className="w-full rounded-lg mb-4 transform transition-transform group-hover:scale-105"
                />
                <p className="text-gray-400 mb-4">{drone.description}</p>
                <ul className="space-y-2">
                  {drone.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-4xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Pourquoi Choisir CAPACITY DRONE ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise & Innovation",
                description: "Notre expérience et les technologies les plus récentes pour des services sur mesure avec une qualité d'image incomparable."
              },
              {
                title: "Flexibilité & Réactivité",
                description: "Une approche adaptée à chaque projet unique avec une réponse rapide et efficace à vos demandes."
              },
              {
                title: "Sécurité & Conformité",
                description: "Des pilotes certifiés respectant les normes en vigueur pour des missions réalisées en toute sécurité."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
        <h2 className=" md:text-4xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Prêt à découvrir nos services ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contactez CAPACITY DRONE dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
