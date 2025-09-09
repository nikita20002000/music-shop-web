import React from 'react';
import type { VinylRecord } from '../../types/index';

interface VinylCardProps {
  record: VinylRecord;
  onAddToCart: (record: VinylRecord) => void;
}

// Компонент карточки виниловой пластинки
const VinylCard: React.FC<VinylCardProps> = ({ record, onAddToCart }) => {
  return (
    <div className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={record.image}
          alt={record.title}
          className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={() => onAddToCart(record)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-purple-400 font-semibold uppercase tracking-wide">
            {record.year}
          </span>
          <span className="text-lg font-bold text-purple-400">
            ${record.price}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-1">{record.title}</h3>
        <p className="text-gray-400 mb-3">{record.artist}</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {record.description}
        </p>
      </div>
    </div>
  );
};

export default VinylCard;
