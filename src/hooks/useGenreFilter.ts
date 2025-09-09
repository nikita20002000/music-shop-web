import { useState, useMemo } from 'react';
import type {VinylRecord} from '../types/index';

// Хук для фильтрации пластинок по жанру
export const useGenreFilter = (records: VinylRecord[]) => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Отфильтрованные пластинки на основе выбранного жанра
  const filteredRecords = useMemo(() => {
    return selectedGenre === 'all' 
      ? records 
      : records.filter(record => record.genre === selectedGenre);
  }, [records, selectedGenre]);

  // Изменение выбранного жанра
  const changeGenre = (genre: string) => {
    setSelectedGenre(genre);
  };

  return {
    selectedGenre,
    filteredRecords,
    changeGenre
  };
};
