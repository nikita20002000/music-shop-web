import React, { createContext, useContext, type ReactNode } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem, VinylRecord } from '../types/index';

// Интерфейс для контекста корзины
interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (record: VinylRecord) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => string;
  getCartCount: () => number;
  openCart: () => void;
  closeCart: () => void;
}

// Создаем контекст
const CartContext = createContext<CartContextType | undefined>(undefined);

// Хук для использования контекста корзины
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

// Интерфейс для пропсов провайдера
interface CartProviderProps {
  children: ReactNode;
}

// Провайдер контекста корзины
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cartUtils = useCart();

  return (
    <CartContext.Provider value={cartUtils}>
      {children}
    </CartContext.Provider>
  );
};
