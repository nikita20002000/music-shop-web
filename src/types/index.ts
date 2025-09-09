// Типы данных для нашего приложения

// Тип для виниловой пластинки
export interface VinylRecord {
  id: number;
  title: string;
  artist: string;
  price: number;
  genre: string;
  year: number;
  image: string;
  description: string;
}

// Тип для элемента корзины (пластинка + количество)
export interface CartItem extends VinylRecord {
  quantity: number;
}

// Тип для слайда в карусели
export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

// Тип для жанра
export interface Genre {
  id: string;
  name: string;
  color: string;
}