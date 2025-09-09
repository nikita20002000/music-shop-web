import { useState, useEffect } from 'react';
import type { HeroSlide } from '../types/index';

// Хук для управления слайдером на главной странице
export const useHeroSlider = (slides: HeroSlide[], autoplayInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Автоматическое переключение слайдов
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoplayInterval]);

  // Переключение на конкретный слайд
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Переключение на следующий слайд
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide
  };
};
