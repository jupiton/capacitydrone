import React from 'react';
import Navigation from '../components/Navigation';
import ScrollArrow from '../components/ScrollArrow';
import ScrollButton from '../components/ScrollButton';

const ContactPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-gray-800">
            <img
              src="/api/placeholder/1920/1080"
              alt="Contact"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Nous sommes là pour répondre à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ScrollButton />
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                En savoir plus
              </button>
            </div>
          </div>

          <ScrollArrow targetId="contact-form" />
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-400">Informations de contact</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "📍",
                        title: "Adresse",
                        content: "16 rue du pontet 69360 St Symphorien d Ozon"
                      },
                      {
                        icon: "📞",
                        title: "Téléphone",
                        content: "06 62 99 81 08"
                      },
                      {
                        icon: "📧",
                        title: "Email",
                        content: "contact@capacity-drone.fr"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="text-blue-300 font-semibold">{item.title}</h3>
                          <p className="text-gray-400">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
  
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-blue-400">Horaires d&apos;ouverture</h2>
                  <p className="text-gray-400">
                    Lundi - Vendredi : 9h00 - 18h00<br />
                    Weekend : Sur rendez-vous
                  </p>
                </div>
              </div>
  
              {/* Contact Form */}
              <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Nom complet *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Votre nom"
                    />
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="votre@email.com"
                    />
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                      placeholder="Votre numéro"
                    />
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Service souhaité *</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white">
                      <option value="">Sélectionnez un service</option>
                      <option value="inspection">Inspection & Surveillance</option>
                      <option value="cartographie">Cartographie et Modélisation 3D</option>
                      <option value="thermique">Détection Thermique</option>
                      <option value="securite">Sécurité & Intervention d&apos;Urgence</option>
                    </select>
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Message *</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white h-32"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                    Envoyer le message
                  </button>
                </form>
              </div>
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
  };
  
  export default ContactPage; 