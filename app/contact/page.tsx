'use client'

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Initialiser EmailJS avec votre clé publique
emailjs.init("sJkEzmmuDWvZ4upbr");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    siret: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Créer un objet FormData
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
        const response = await emailjs.sendForm(
            'service_7n96nns',
            'template_mpocw88',
            form,
            'sJkEzmmuDWvZ4upbr'
        );

        console.log('Réponse EmailJS:', response);

        if (response.status === 200) {
            setSubmitStatus('success');
            form.reset();
        } else {
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error('Erreur:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Contact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez CAPACITY DRONE dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-400">Nos Coordonnées</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06 62 99 81 08
                  
                </p>
                <p className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@capacity-drone.fr
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Envoyez-nous un message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400">
                  Message envoyé avec succès !
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Nom complet *</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email *</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Entreprise</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">SIRET</label>
                  <input
                    type="text"
                    name="siret"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Numéro SIRET"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 