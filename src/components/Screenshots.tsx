import React, { useState } from 'react';

const Screenshots: React.FC = () => {
  // In a real app, you'd replace these with actual image paths
  const screenshots = [
    { id: 1, alt: 'Gameplay Screenshot 1', src: '#' },
    { id: 2, alt: 'Gameplay Screenshot 2', src: '#' },
    { id: 3, alt: 'Gameplay Screenshot 3', src: '#' },
    { id: 4, alt: 'Gameplay Screenshot 4', src: '#' },
    { id: 5, alt: 'Gameplay Screenshot 5', src: '#' },
    { id: 6, alt: 'Gameplay Screenshot 6', src: '#' }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="screenshots" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-2">Game Screenshots</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at the stunning visuals and immersive world of our game
          </p>
        </div>
        
        {/* Main featured screenshot */}
        <div className="mb-8 bg-gray-800 rounded-xl p-2 shadow-lg">
          <div className="w-full aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">Featured Screenshot {activeIndex + 1}</span>
            {/* In a real implementation, you would use actual images */}
            {/* <img 
              src={screenshots[activeIndex].src} 
              alt={screenshots[activeIndex].alt} 
              className="w-full h-full object-cover rounded-lg"
            /> */}
          </div>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id}
              className={`cursor-pointer rounded-lg overflow-hidden aspect-video bg-gray-700 ${
                index === activeIndex ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-400 text-sm">SS {index + 1}</span>
                {/* In a real implementation, you would use actual images */}
                {/* <img 
                  src={screenshot.src} 
                  alt={screenshot.alt} 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
