import React from 'react';
import androidIcon from '../assets/images/android.png';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-indigo-500 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-2">Download Now</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Get the game on your favorite platform and start your adventure today!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">          {/* Android Download */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-sm border border-indigo-200 border-opacity-20">
            <div className="flex flex-col items-center text-center">              <img 
                src={androidIcon} 
                alt="Android" 
                className="w-20 h-20 object-contain"
              />
              <h3 className="mt-4 text-2xl font-bold text-white">Android</h3>
              <p className="mt-2 text-indigo-100">Download for your Android smartphone or tablet</p>
              <ul className="mt-4 text-sm text-indigo-100 space-y-2">
                <li>• Android 7.0 or higher</li>
                <li>• 2GB RAM minimum</li>
                <li>• 500MB free storage</li>
              </ul>
              <a 
                href="/downloads/game-android.apk" 
                className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300"
              >                <img 
                  src="/src/assets/images/android.png" 
                  alt="Android" 
                  className="w-6 h-6 mr-2 object-contain"
                />
                Download for Android
              </a>
            </div>
          </div>
          {/* Windows Download */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-sm border border-indigo-200 border-opacity-20">
            <div className="flex flex-col items-center text-center">
              <svg className="w-20 h-20 text-blue-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"></path>
              </svg>
              <h3 className="mt-4 text-2xl font-bold text-white">Windows</h3>
              <p className="mt-2 text-indigo-100">Download for your Windows PC</p>
              <ul className="mt-4 text-sm text-indigo-100 space-y-2">
                <li>• Windows 10/11 64-bit</li>
                <li>• 4GB RAM minimum</li>
                <li>• 1GB free storage</li>
                <li>• DirectX 11</li>
              </ul>
              <a 
                href="/downloads/game-windows.exe" 
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"></path>
                </svg>
                Download for Windows
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
