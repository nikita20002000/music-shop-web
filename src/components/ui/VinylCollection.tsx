import React from 'react';
import type { VinylRecord, Genre } from '../../types/index';
import { useGenreFilter } from '../../hooks/useGenreFilter';
import { useCartContext } from '../../context/CartContext';
import GenreFilter from './GenreFilter';
import VinylCard from './VinylCard';

interface VinylCollectionProps {
  records: VinylRecord[];
  genres: Genre[];
}

// Компонент коллекции виниловых пластинок
const VinylCollection: React.FC<VinylCollectionProps> = ({ records, genres }) => {
  const { selectedGenre, filteredRecords, changeGenre } = useGenreFilter(records);
  const { addToCart } = useCartContext();

  return (
    <section id="collection" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Our Vinyl Collection
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated selection of vinyl records spanning decades and genres
          </p>
        </div>

        {/* Фильтр по жанрам */}
        <GenreFilter 
          genres={genres} 
          selectedGenre={selectedGenre} 
          onGenreChange={changeGenre} 
        />

        {/* Сетка пластинок */}
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No records found for this genre.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRecords.map(record => (
              <VinylCard 
                key={record.id} 
                record={record} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VinylCollection;
