import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function SecuriteInterventionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-800">
          <img
            src="/api/placeholder/1920/1080"
            alt="Sécurité et Intervention"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Sécurité & Intervention d&apos;Urgence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Solutions de surveillance et d&apos;intervention rapide par drone pour votre sécurité
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/devis" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all"
            >
              Demander un devis
            </Link>
            <button className="bg-red-500/80 backdrop-blur-sm hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Contact urgent
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Nos Services de Sécurité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Surveillance en Temps Réel",
                description: "Surveillance continue de sites sensibles avec retransmission en direct",
                features: [
                  "Couverture de grandes surfaces",
                  "Vision nocturne",
                  "Détection de mouvements",
                  "Alertes en temps réel"
                ]
              },
              {
                title: "Intervention d&apos;Urgence",
                description: "Déploiement rapide pour situations critiques et évaluation immédiate",
                features: [
                  "Réponse rapide 24/7",
                  "Évaluation des risques",
                  "Coordination des secours",
                  "Documentation en direct"
                ]
              },
              {
                title: "Sécurité Événementielle",
                description: "Surveillance et sécurisation d&apos;événements et rassemblements",
                features: [
                  "Contrôle des foules",
                  "Gestion des accès",
                  "Surveillance périmétrique",
                  "Communication temps réel"
                ]
              },
              {
                title: "Recherche & Sauvetage",
                description: "Assistance aux opérations de recherche et sauvetage",
                features: [
                  "Caméras thermiques",
                  "Couverture zones difficiles",
                  "Guidage des équipes",
                  "Support logistique"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-red-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Processus d&apos;Intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Alerte",
                description: "Réception et analyse rapide de la situation d&apos;urgence"
              },
              {
                step: "2",
                title: "Déploiement",
                description: "Mobilisation immédiate des équipes et du matériel"
              },
              {
                step: "3",
                title: "Intervention",
                description: "Mise en œuvre des actions de sécurité nécessaires"
              },
              {
                step: "4",
                title: "Suivi",
                description: "Rapport détaillé et recommandations post-intervention"
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Équipements Spécialisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Drones d&apos;Intervention",
                specs: [
                  "Caméras haute définition",
                  "Vision nocturne",
                  "Capteurs thermiques",
                  "Autonomie prolongée"
                ]
              },
              {
                title: "Systèmes de Communication",
                specs: [
                  "Transmission en temps réel",
                  "Réseau sécurisé",
                  "Communication cryptée",
                  "Portée étendue"
                ]
              },
              {
                title: "Centre de Contrôle",
                specs: [
                  "Surveillance 24/7",
                  "Analyse en temps réel",
                  "Coordination des équipes",
                  "Archivage sécurisé"
                ]
              }
            ].map((equipment, index) => (
              <div key={index} className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-bold text-blue-300 mb-4">{equipment.title}</h3>
                <ul className="space-y-3">
                  {equipment.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <span className="text-red-400">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Besoin d&apos;une intervention urgente ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nos équipes sont disponibles 24/7 pour répondre à vos besoins en matière de sécurité et d&apos;intervention d&apos;urgence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
            >
              Contact d&apos;urgence
            </a>
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all">
              En savoir plus
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