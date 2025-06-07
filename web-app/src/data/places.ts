
import type { Place } from '../utils/types';

export const places: Place[] = [
  {
    id: '1',
    cost: 10,
    name: 'Marienplatz',
    description: 'The central square in Munich, known for its historic buildings and the Glockenspiel.',
    location: {
      latitude: 48.1374,
      longitude: 11.5754,
      street: 'Marienplatz',
      city: 'Munich',
      country: 'Germany',
    },
    imageUrl: 'https://www.introducingmunich.com/f/alemania/munich/guia/marienplatz-m.jpg',
  },
  {
    id: '2',
    cost: 10,
    name: 'Englischer Garten',
    description: 'One of the largest urban parks in the world, perfect for a leisurely stroll or a picnic.',
    location: {
      latitude: 48.1642,
      longitude: 11.6056,
      street: 'Englischer Garten',
      city: 'Munich',
      country: 'Germany',
    },
    imageUrl: 'https://www.muenchen.de/sites/default/files/styles/3_2_w1008/public/2022-07/lhm-e-garten-panorama.jpg.webp',
  },
];