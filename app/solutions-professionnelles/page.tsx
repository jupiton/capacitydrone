import Navigation from '../components/Navigation';

export default function SolutionsProfessionnellesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-800">
          <img
            src="/api/placeholder/1920/1080"
            alt="Solutions Professionnelles"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Solutions Professionnelles
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Des solutions sur mesure pour répondre à vos besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Découvrir nos solutions
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Nos Solutions Professionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Matrice 350 RTK",
                description: "Drone professionnel haute performance pour les missions complexes",
                features: [
                  "Double batterie pour une autonomie prolongée",
                  "Capteurs anticollision omnidirectionnels",
                  "Précision centimétrique avec RTK",
                  "Charge utile jusqu'à 2,7 kg"
                ]
              },
              {
                title: "Mavic 3 Enterprise",
                description: "Solution polyvalente pour les inspections et la cartographie",
                features: [
                  "Caméra 4/3 CMOS 20MP",
                  "Zoom optique 28x",
                  "Autonomie de 45 minutes",
                  "Transmission vidéo jusqu'à 15km"
                ]
              },
              {
                title: "Phantom 4 RTK",
                description: "Précision et fiabilité pour la cartographie",
                features: [
                  "Module RTK intégré",
                  'Capteur 1" 20MP',
                  "Stabilisation 3 axes",
                  "Planning de vol automatisé"
                ]
              },
              {
                title: "Mavic 3 Thermal",
                description: "Imagerie thermique de pointe",
                features: [
                  "Double caméra thermique/RGB",
                  "Résolution thermique 640x512",
                  "Plage de température -20°C à 550°C",
                  "Mode split-screen"
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Services Associés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Formation",
                description: "Formation complète pour vos équipes",
                items: [
                  "Pilotage de drone",
                  "Réglementation",
                  "Maintenance",
                  "Logiciels spécialisés"
                ]
              },
              {
                title: "Support Technique",
                description: "Assistance et maintenance",
                items: [
                  "Support 24/7",
                  "Maintenance préventive",
                  "Réparations",
                  "Mises à jour"
                ]
              },
              {
                title: "Conseil",
                description: "Expertise et accompagnement",
                items: [
                  "Analyse des besoins",
                  "Solutions sur mesure",
                  "Optimisation des process",
                  "Veille technologique"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-bold text-blue-300 mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <span className="text-blue-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Performance",
                value: "100%",
                description: "Fiabilité optimale"
              },
              {
                title: "Support",
                value: "24/7",
                description: "Assistance continue"
              },
              {
                title: "ROI",
                value: "+30%",
                description: "Retour sur investissement"
              },
              {
                title: "Satisfaction",
                value: "98%",
                description: "Clients satisfaits"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-blue-300 mb-2">{stat.title}</div>
                <div className="text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Prêt à passer au niveau supérieur ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez comment nos solutions professionnelles peuvent transformer votre activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
            >
              Demander une démonstration
            </a>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 CAPACITY DRONE. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
} 