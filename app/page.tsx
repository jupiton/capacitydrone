import Navigation from './components/Navigation';
import ScrollArrow from './components/ScrollArrow';
import Link from 'next/link';
import SectorCard from './components/SectorCard';
import Image from 'next/image';
import Footer from './components/Footer';

const Home = () => {

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              L'accès à l'inaccessible
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre partenaire expert en solutions de drones professionnelles pour des missions variées : 
              inspections industrielles, cartographie, surveillance, détection thermique et bien plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href="#services" className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </a>
              <Link href="/contact">
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Ajout de la flèche de défilement */}
        <ScrollArrow />
      </section>

      {/* Nos Drones Section */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-full mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Notre Flotte de Drones
          </h2>
          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 justify-center">
            {[
              {
                title: "Matrice 350 RTK",
                subtitle: "Précision et robustesse",
                image: "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/350RTK.png",
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
                image: "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/mavic3ent.png",
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
                image: "https://capacity-drone.s3.eu-west-3.amazonaws.com/capacity-drone/mavic3termal.png",
                description: "Spécialement conçu pour l'analyse thermique de haute précision.",
                features: [
                  "Surveillance thermique",
                  "Recherche et sauvetage",
                  "Surveillance environnementale",
                  "Agriculture de précision"
                ]
              }
            ].map((drone, index) => (
              <div key={index} className="flex-none w-[400px] h-[600px] group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-blue-300 h-[32px] overflow-hidden">{drone.title}</h3>
                <p className="text-lg text-blue-300/80 mb-4 h-[28px] overflow-hidden">{drone.subtitle}</p>
                <div className="h-[200px] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={drone.image}
                    alt={drone.title}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-gray-400 mb-4 h-[48px] overflow-hidden">{drone.description}</p>
                <ul className="space-y-2 flex-grow">
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

      {/* Services Section */}
      <section id="services" className="py-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Inspection & Surveillance",
                description: "Inspections techniques et surveillance de sites par drone",
                href: "/inspection-drones",
                path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Topographie & Modélisation",
                description: "Cartographie et modélisation 3D de haute précision",
                href: "/topographie",
                path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
              },
              {
                title: "Thermique & Énergie",
                description: "Inspections thermiques et diagnostics énergétiques",
                href: "/thermique",
                path: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              },
              {
                title: "Télécommunication",
                description: "Visée FH et jumeaux numériques panoramiques 360°",
                href: "/telecommunication",
                path: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              },
              {
                title: "Suivi de Chantier",
                description: "Surveillance et suivi de l'évolution des chantiers",
                href: "/suivichantier",
                path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} 
                className="group p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-blue-500/10 
                  hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center
                  hover:bg-gradient-to-b hover:from-gray-800/50 hover:to-blue-900/20 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="mb-4 p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-8 h-8 transform transition-transform duration-500 group-hover:rotate-12" fill="none" viewBox="0 0 24 24">
                    <path 
                      className="stroke-blue-400 group-hover:stroke-[url(#gradient-services1)]"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={service.path} 
                    />
                    <defs>
                      <linearGradient id="gradient-services1" x1="0" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#4b00ff" />
                        <stop offset="100%" stopColor="#c100e9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300 transform transition-all duration-500 group-hover:text-blue-200">{service.title}</h3>
                <p className="text-gray-400 text-sm transform transition-all duration-500 group-hover:text-gray-200">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Pourquoi choisir Capacity Drone ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectorCard
              title="Expertise & Innovation"
              description="Notre     expertise     technique     et     nos     technologies    avancées    de    pointe     nous     permettent     de    réaliser    des    prestations    de    qualité     pour     vos     projets"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#4b00ff" />
                      <stop offset="100%" stopColor="#c100e9" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient1)"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              }
            />
            <SectorCard
              title="Flexibilité & Réactivité"
              description="Notre     organisation     flexible     et     notre    approche    personnalisée    nous     permettent     d'adapter     et    d'optimiser     nos     services     pour    répondre     à     vos     besoins"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <defs>
                    <linearGradient id="gradient2" x1="0" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#4b00ff" />
                      <stop offset="100%" stopColor="#c100e9" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient2)"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <SectorCard
              title="Sécurité & Conformité"
              description="Notre    équipe    de    pilotes    avec    leurs     certifications     assurent    une     sécurité     optimale     pour    chaque     mission     selon     les    normes     et     réglementations"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <defs>
                    <linearGradient id="gradient3" x1="0" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#4b00ff" />
                      <stop offset="100%" stopColor="#c100e9" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient3)"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
        <h2 className=" md:text-4xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Prêt à découvrir nos services ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contactez CAPACITY DRONE dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Demander un devis
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
                Nous contacter
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
