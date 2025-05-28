import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gray-900 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Game Title
            <span className="block text-indigo-500">Epic Adventure Awaits</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience an immersive gaming adventure like never before. Battle epic enemies, 
            explore vast worlds, and embark on an unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#download" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              Download Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
            <a 
              href="#features" 
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg border border-gray-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <div className="rounded-lg bg-gray-800 p-2 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Replace with your game screenshot */}
            <div className="bg-gray-700 w-full aspect-video rounded flex items-center justify-center">
              <span className="text-gray-400 text-lg">Game Screenshot</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1F2937"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
