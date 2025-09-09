import type {VinylRecord, HeroSlide, Genre} from '../types/index';

// Моковые данные для виниловых пластинок
export const vinylRecords: VinylRecord[] = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    price: 29.99,
    genre: "rock",
    year: 1973,
    image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Dark+Side",
    description: "A groundbreaking album that explores themes of conflict, greed, time, and mental illness."
  },
  {
    id: 2,
    title: "Thriller",
    artist: "Michael Jackson",
    price: 24.99,
    genre: "pop",
    year: 1982,
    image: "https://placehold.co/300x300/000000/ffffff?text=Thriller",
    description: "The best-selling album of all time, featuring iconic hits like 'Billie Jean' and 'Beat It'."
  },
  {
    id: 3,
    title: "Kind of Blue",
    artist: "Miles Davis",
    price: 34.99,
    genre: "jazz",
    year: 1959,
    image: "https://placehold.co/300x300/2c3e50/ffffff?text=Kind+of+Blue",
    description: "A landmark jazz album that defined modal jazz and influenced generations of musicians."
  },
  {
    id: 4,
    title: "Nevermind",
    artist: "Nirvana",
    price: 27.99,
    genre: "rock",
    year: 1991,
    image: "https://placehold.co/300x300/000000/ffffff?text=Nevermind",
    description: "The album that brought grunge into the mainstream and defined a generation."
  },
  {
    id: 5,
    title: "Abbey Road",
    artist: "The Beatles",
    price: 32.99,
    genre: "rock",
    year: 1969,
    image: "https://placehold.co/300x300/4a5568/ffffff?text=Abbey+Road",
    description: "The Beatles' final recorded album, featuring their iconic cover and timeless songs."
  },
  {
    id: 6,
    title: "Purple Rain",
    artist: "Prince",
    price: 26.99,
    genre: "pop",
    year: 1984,
    image: "https://placehold.co/300x300/8b5cf6/ffffff?text=Purple+Rain",
    description: "A masterpiece blending rock, pop, R&B, and funk that cemented Prince's superstar status."
  },
  {
    id: 7,
    title: "Blue",
    artist: "Joni Mitchell",
    price: 28.99,
    genre: "folk",
    year: 1971,
    image: "https://placehold.co/300x300/3b82f6/ffffff?text=Blue",
    description: "A deeply personal album that redefined confessional songwriting in popular music."
  },
  {
    id: 8,
    title: "OK Computer",
    artist: "Radiohead",
    price: 31.99,
    genre: "rock",
    year: 1997,
    image: "https://placehold.co/300x300/1e40af/ffffff?text=OK+Computer",
    description: "A visionary album that captured the anxiety of the modern technological age."
  }
];

// Моковые данные для слайдов в карусели
export const heroSlides: HeroSlide[] = [
  {
    image: "https://placehold.co/1200x500/1f2937/ffffff?text=Vinyl+Collection",
    title: "Discover Timeless Classics",
    subtitle: "Explore our curated collection of legendary vinyl records"
  },
  {
    image: "https://placehold.co/1200x500/7c3aed/ffffff?text=New+Arrivals",
    title: "Fresh Releases",
    subtitle: "Discover the latest additions to our vinyl catalog"
  },
  {
    image: "https://placehold.co/1200x500/059669/ffffff?text=Special+Editions",
    title: "Limited Editions",
    subtitle: "Exclusive pressings and collector's items"
  }
];

// Моковые данные для жанров
export const genres: Genre[] = [
  { id: 'all', name: 'All Genres', color: 'bg-gray-500' },
  { id: 'rock', name: 'Rock', color: 'bg-red-500' },
  { id: 'pop', name: 'Pop', color: 'bg-purple-500' },
  { id: 'jazz', name: 'Jazz', color: 'bg-blue-500' },
  { id: 'folk', name: 'Folk', color: 'bg-green-500' }
];
