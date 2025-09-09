import React from 'react';
import { vinylRecords, heroSlides, genres } from './data/mockData';
import { CartProvider } from './context/CartContext';

// Компоненты
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSlider from './components/ui/HeroSlider';
import VinylCollection from './components/ui/VinylCollection';
import AboutSection from './components/ui/AboutSection';
import ContactSection from './components/ui/ContactSection';
import Cart from './components/ui/Cart';

// Главный компонент приложения
const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <HeroSlider slides={heroSlides} />
          <VinylCollection records={vinylRecords} genres={genres} />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
