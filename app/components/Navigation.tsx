import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec taille maximale */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logoinsk.svg"
              alt="Capacity Drone Logo"
              width={40}
              height={40}
              className="w-40 h-40 -my-10"
            />
          </Link>

          {/* Navigation Links */}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Accueil
          </Link>
          <Link href="/inspection-drones" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Inspection par Drones
          </Link>
          <Link href="/cartographie" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Cartographie
          </Link>
          <Link href="/securite-intervention" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Sécurité &amp; Intervention
          </Link>
          <Link href="/detection-thermique" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Détection Thermique
          </Link>
          <Link href="/solutions-professionnelles" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Solutions Professionnelles
          </Link>
          <Link href="/domaines/chantier" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium pl-6">
            Chantier
          </Link>
          <Link href="/domaines/photovoltaique" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium pl-6">
            Photovoltaïque
          </Link>
          <Link href="/domaines/telecommunication" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium pl-6">
            Télécommunication Visée
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 