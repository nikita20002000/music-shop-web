import React from 'react';

// Компонент секции "О нас"
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Vinyl Experience
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At VinylVault, we believe in the timeless magic of vinyl records. 
              The warm analog sound, the tactile experience of handling the album, 
              and the stunning artwork create an immersive musical journey that digital formats simply can't replicate.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our collection features carefully curated classics and hidden gems, 
              all meticulously preserved and presented for the discerning collector and casual listener alike.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Records in Stock</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-400">Each record is carefully inspected and cleaned before shipping</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;