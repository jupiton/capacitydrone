import Navigation from '../components/Navigation';

const DevisPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source 
              src="https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/linkedin.mp4" 
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Demander un devis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Obtenez une estimation personnalisée pour votre projet
          </p>
        </div>

        {/* Indicateur de défilement */}
        <a href="#devis-form" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
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

      {/* Devis Form Section */}
      <section id="devis-form" className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <h2 className="text-2xl font-bold text-blue-400 mb-8">Formulaire de demande de devis</h2>
            <form className="space-y-6">
              {/* Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Nom complet *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Entreprise</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Téléphone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre numéro"
                    required
                  />
                </div>
              </div>

              {/* Type de service */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Service souhaité *</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="inspection">Inspection & Surveillance</option>
                  <option value="topographie">Topographie & Modélisation 3D</option>
                  <option value="thermique">Inspection Thermique</option>
                  <option value="telecom">Télécommunication</option>
                  <option value="suivi-chantier">Suivi de Chantier</option>
                  <option value="securite">Sécurité & Intervention d&apos;Urgence</option>
                </select>
              </div>

              {/* Description du projet */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Description du projet *</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white h-32"
                  placeholder="Décrivez votre projet en détail..."
                  required
                ></textarea>
              </div>

              {/* Date souhaitée */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Date souhaitée d&apos;intervention</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
              >
                Envoyer la demande de devis
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage; 