import { useState } from 'react';
import type {CartItem, VinylRecord} from '../types/index';

// Хук для управления корзиной покупок
export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Добавление товара в корзину
  const addToCart = (record: VinylRecord) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === record.id);
      if (existing) {
        return prev.map(item => 
          item.id === record.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...record, quantity: 1 }];
    });
  };

  // Удаление товара из корзины
  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Изменение количества товара в корзине
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Получение общей стоимости товаров в корзине
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Получение общего количества товаров в корзине
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Открытие корзины
  const openCart = () => setIsCartOpen(true);

  // Закрытие корзины
  const closeCart = () => setIsCartOpen(false);

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getCartCount,
    openCart,
    closeCart
  };
};
