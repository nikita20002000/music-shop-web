import React from 'react';
import type { HeroSlide } from '../../types/index';
import { useHeroSlider } from '../../hooks/useHeroSlider';

interface HeroSliderProps {
  slides: HeroSlide[];
}

// Компонент слайдера для главной страницы
const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useHeroSlider(slides);

  return (
    <section id="home" className="relative h-[500px] overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                  {slide.subtitle}
                </p>
                <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Кнопки навигации (для больших экранов) */}
      <div className="absolute inset-y-0 left-0 hidden sm:flex items-center">
        <button 
          onClick={prevSlide}
          className="ml-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 hidden sm:flex items-center">
        <button 
          onClick={nextSlide}
          className="mr-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
