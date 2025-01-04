'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              
              {/* Menu déroulant Nos Services */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Nos Services
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link href="/inspection-drones" className="block px-4 py-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300">
                      Inspection & Surveillance
                    </Link>
                    <Link href="/topographie" className="block px-4 py-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300">
                      Topographie & Modélisation
                    </Link>
                    <Link href="/thermique" className="block px-4 py-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300">
                      Thermique & Énergie
                    </Link>
                    <Link href="/telecommunication" className="block px-4 py-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300">
                      Télécommunication
                    </Link>
                    <Link href="/suivichantier" className="block px-4 py-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300">
                      Suivi de Chantier
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/realisations" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Nos Réalisations
              </Link>

              <Link href="/contact" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4b00ff] hover:to-blue-900/20 hover:bg-clip-text transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Accueil
              </Link>
              
              {/* Services en accordéon pour mobile */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-gray-300">
                  Nos Services
                </div>
                <div className="pl-6 space-y-2">
                  <Link href="/inspection-drones" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                    Inspection & Surveillance
                  </Link>
                  <Link href="/topographie" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                    Topographie & Modélisation
                  </Link>
                  <Link href="/thermique" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                    Thermique & Énergie
                  </Link>
                  <Link href="/telecommunication" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                    Télécommunication
                  </Link>
                  <Link href="/suivichantier" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                    Suivi de Chantier
                  </Link>
                </div>
              </div>

              <Link href="/realisations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Nos Réalisations
              </Link>

              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 