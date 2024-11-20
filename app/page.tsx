import Navigation from './components/Navigation'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section avec Vidéo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="https://capacity-drone.s3.eu-west-3.amazonaws.com/linkedin.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA6JKEXUS26SX7SRGF%2F20241117%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241117T045900Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJIMEYCIQD2xLPg1J9yBTrImGLlOIaWiRy1kvjL3lwe0RDtB34T0gIhAOuTqNoSet9Um6bVDpVTvflyE6O%2F4PczGVn5cG3aDQEvKugCCD4QABoMOTgyMDgxMDUzODc3IgwhLyIfGwz%2FCeUERy4qxQKsfc8pkklVSLgfXSK%2BQ2U2onATHY5pQV3XNlMWpr%2FAzZ%2BkxzxkPvLBx2j5pO%2FSUnxXRubQrhQUCSH46Of%2B76tss3ZtuLl5POP5zyhJvc8J6KwhYvZI1vd2fyOGuKQzPo4CC83VJ627ugUi%2FykfbmEB2KCrTuwTUu1uzBaxejrFt3mHwNqBz7HEW9tv8GzV7k0k%2FKsJOj3bVOgisGTEYc5ugh%2FssDc3ZmY0IqIwUVsh7tXZkUfMpEQTyoRDr86MDOA%2B%2FrLetjcVmYeXtVEzjGNlz%2BRcIHZVEISsXQ7BC8APdkAKFcpr5ZtaUGNXJrP0a0Zl44LsVFxKK5keQva6Ebo05W%2BAgR2YRsoeYVI%2FNlPkahEAG%2Flbki%2F54zkN%2BJhgsYM5wN79t%2BO7iVml2VrQCVE1Rp3lmKdMR%2BsrBFuEge7KblrpseuMMMTT5bkGOrIC8HMhXet7lkGfxT%2Fb%2B%2F2mBZ8oc3wLfKxZDQKekyPEQZmzR9eXYq94FI%2B4BNltCFwzX06HseSscUJo4xtJruvzk9Zv8ru4dh5vezRdteL0VrroR1XvCeBFoV7Kutuw%2BfoOr%2FjwGbgvIzA80BkGqPF%2FpCX0lSoxtF%2BEsO7qiOQRoz1F3E3Z2DglNdeWZG5qHPyfxRRmo8aRd8kCLffbuJhDGeCU6%2FoobGT9iuisAkeH2tkun5VHZsm0872Mtj2ifTAvUwL2gINtVjCGKJRAL3lGfSkh0jYGqNlyEpVbabFhec4Y5xN6PFLGCbZHR9YntYNIwDlESPAOvXyPatn1fLx9Y7QLHvLq6NNwQOJdVpbUKuUpmbVpPeDtrJh%2BOdprg5NbhOo4E6n8iQ59IqmTwFMUn%2BT5&X-Amz-Signature=52669b7cbef0b4775bf24a131244195f4850adcf9d37d37b047e25dfe08c6eeb&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
          {/* Effet de particules/grille */}
          <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              CAPACITY DRONE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              L&apos;excellence des services de drones professionnels
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400">
              Votre partenaire expert en solutions de drones professionnelles pour des missions variées : 
              inspections industrielles, cartographie, surveillance, détection thermique et bien d&apos;autres.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
        </div>
      </section>

      {/* Rest of the page content... */}
    </div>
  );
}

export default Home;