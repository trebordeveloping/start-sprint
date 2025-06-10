
import type { User } from '../utils/types';

export const users: User[] = [
  {
    id: '1',
    name: 'Guest',
    email: 'guest@example.com',
    credits: 150,
    unlockedPlaces: [], // Guest user starts with no unlocked places
    recentPlaces: [], // Guest user starts with no recent places
    reviews: [], // Guest user starts with no reviews
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    credits: 130,
    unlockedPlaces: ['1', '2'], // Example of unlocked places
    recentPlaces: ['3'], // Example of recently visited places
    reviews: [],
  },
  {
    id: '3',
    name: 'Max Mustermann',
    email: 'max.mustermann@example.com',
    credits: 150,
    unlockedPlaces: [],
    recentPlaces: [],
    reviews: [],
  },
  {
    id: '4',
    name: 'Marcelo',
    email: 'marcelo@startmunich.de',
    credits: 150,
    unlockedPlaces: [],
    recentPlaces: [],
    reviews: [],
  },
]