import React from 'react';
import type { Genre } from '../../types/index';

interface GenreFilterProps {
  genres: Genre[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

// Компонент для фильтрации пластинок по жанру
const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {genres.map(genre => (
        <button
          key={genre.id}
          onClick={() => onGenreChange(genre.id)}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
            selectedGenre === genre.id
              ? `${genre.color} text-white shadow-lg`
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
