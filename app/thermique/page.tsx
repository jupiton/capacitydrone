import Navigation from '../components/Navigation';
import Link from 'next/link';
import ActionButtons from '../components/ActionButtons';
import ScrollArrow from '../components/ScrollArrow';
const ThermalInspectionDetailed  = () => {
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
              Inspection par Drone & Caméra Thermique
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 mb-4">
              Solutions pour Centrales Photovoltaïques, Ombrières et Toitures
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Une approche innovante et efficace pour évaluer l&apos;état de vos infrastructures et détecter rapidement toute anomalie, sans mobilisation d&apos;équipes au sol.
            </p>
            <ActionButtons/>
          </div>
        </div>
      </section>

      {/* Indicateur de défilement */}
      <ScrollArrow />

      {/* Services Section */}
      <section id="section-detail" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Technologies d&apos;Inspection Avancées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Drones Haute Précision</h3>
              <p className="text-gray-400">
                Nos drones suivent des itinéraires prédéfinis pour une cartographie complète et précise de vos installations. Équipés de caméras HD et thermiques, ils capturent des images de haute qualité même dans les zones difficiles d&apos;accès.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Caméras Thermiques de Pointe</h3>
              <p className="text-gray-400">
                Nos caméras thermiques détectent les plus infimes différences de température à la surface des matériaux, permettant d&apos;identifier précisément :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Cellules solaires défectueuses</li>
                <li>Problèmes de câblage et points de surchauffe</li>
                <li>Défauts de connexion et zones sous-performantes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Applications Spécialisées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Centrales Photovoltaïques</h3>
              <p className="text-gray-400">
                Inspection complète des installations pour vérifier :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Performance des cellules solaires</li>
                <li>Intégrité des câblages</li>
                <li>Détection des panneaux surchauffés</li>
                <li>Analyse des connexions électriques</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Ombrières Photovoltaïques</h3>
              <p className="text-gray-400">
                Surveillance spécialisée des structures de parking et espaces ouverts :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Détection des panneaux défectueux</li>
                <li>Vérification des structures porteuses</li>
                <li>Analyse des impacts climatiques</li>
                <li>Contrôle des fixations</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Toitures</h3>
              <p className="text-gray-400">
                Inspection complète des toitures<br />
                équipées pour :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Détection des fuites thermiques</li>
                <li>Analyse des défauts d&apos;isolation</li>
                <li>Identification des zones endommagées</li>
                <li>Vérification de l&apos;étanchéité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Avantages de Notre Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Sécurité Optimale</h3>
              <p className="text-gray-400">
                Réduction significative des risques grâce à l&apos;inspection à distance. Plus besoin d&apos;exposer le personnel aux dangers des travaux en hauteur ou des sites difficiles d&apos;accès.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Efficacité Maximale</h3>
              <p className="text-gray-400">
                Couverture rapide et précise de grandes surfaces. Une inspection qui prendrait des jours en manuel peut être réalisée en quelques heures avec nos drones.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Accessibilité Totale</h3>
              <p className="text-gray-400">
                Inspection des zones les plus difficiles d&apos;accès comme les toits en pente, les structures élevées ou les terrains accidentés, sans compromis sur la qualité.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Rentabilité Accrue</h3>
              <p className="text-gray-400">
                Réduction significative des coûts de maintenance grâce à la détection précoce des problèmes et à l&apos;optimisation des interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Rapports d&apos;Inspection Détaillés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300 whitespace-nowrap">Cartographie Thermique</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Points chauds et froids</li>
                <li>Images haute résolution</li>
                <li>Zones critiques identifiées</li>
                <li>Analyse comparative</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Analyse Visuelle</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Comparaisons thermiques</li>
                <li>Captures annotées</li>
                <li>Points spécifiques</li>
                <li>Documentation technique</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Diagnostic Complet</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Description des anomalies</li>
                <li>Évaluation performance</li>
                <li>Solutions proposées</li>
                <li>Priorisation actions</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Plan d&apos;Action</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Recommandations détaillées</li>
                <li>Planning maintenance</li>
                <li>Suivi programmé</li>
                <li>Optimisation continue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Une Solution Complète pour vos Installations
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Notre solution d&apos;inspection par drone et caméra thermique offre une approche moderne, rapide et précise pour garantir la performance et la sécurité de vos installations. Grâce à nos rapports détaillés, prenez des décisions éclairées pour l&apos;entretien et l&apos;optimisation de vos équipements.
          </p>
          <ActionButtons/>
        </div>
      </section>
    </div>
  );
};

export default ThermalInspectionDetailed;
