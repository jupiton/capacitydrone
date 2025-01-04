'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isRealisationsOpen, setIsRealisationsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo13.svg"
                alt="Capacity Drone Logo"
                width={40}
                height={40}
                className="w-40 h-40 -my-10"
              />
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              
              {/* Menu déroulant Nos Services */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Nos Services
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Sous-menu Services */}
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black/80 backdrop-blur-sm border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/inspection-drones" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Inspection et Surveillance
                    </Link>
                    <Link href="/topographie" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Topographie et Modelisation
                    </Link>
                    <Link href="/thermique" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Thermique et gestion de l&apos;energie
                    </Link>
                    <Link href="/telecommunication" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Télécommunication
                    </Link>
                    <Link href="/suivichantier" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Suivi De Chantier
                    </Link>
                  </div>
                </div>
              </div>

              {/* Menu déroulant Domaines d'activités */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Nos Réalisations
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Sous-menu Domaines */}
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black/80 backdrop-blur-sm border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/domaines/chantier" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Chantier
                    </Link>
                    <Link href="/domaines/photovoltaique" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Photovoltaïque
                    </Link>
                    <Link href="/domaines/telecommunication" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Télécommunication
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              
              {/* Services avec sous-menu */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
                >
                  <span>Nos Services</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      href="/inspection-drones" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Inspection & Surveillance
                    </Link>
                    <Link 
                      href="/topographie" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Topographie & Modélisation
                    </Link>
                    <Link 
                      href="/thermique" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Thermique & Énergie
                    </Link>
                    <Link 
                      href="/telecommunication" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Télécommunication
                    </Link>
                    <Link 
                      href="/suivichantier" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Suivi de Chantier
                    </Link>
                  </div>
                )}
              </div>

              {/* Nos Réalisations avec sous-menu */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsRealisationsOpen(!isRealisationsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 rounded-md"
                >
                  <span>Nos Réalisations</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${isRealisationsOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isRealisationsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      href="/domaines/telecommunication" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Télécommunication
                    </Link>
                    <Link 
                      href="/domaines/photovoltaique" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Photovoltaïque
                    </Link>
                    <Link 
                      href="/domaines/chantier" 
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Chantier
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 