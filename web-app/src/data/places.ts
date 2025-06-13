
import type { Place } from '../utils/types';

export const places: Place[] = [
  {
    id: '3',
    cost: 10,
    name: 'SOIS BLESSED',
    description: 'A beautifully designed café-restaurant housed within a concept store offering sustainable fashion, interior goods, and flowers.',
    location: {
      latitude: 48.1413896,
      longitude: 11.5723802,
      street: 'Prannerstraße 10',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/BJVLVpCjmutgmbgE6',
    },
    imageUrl: 'https://soisblessed.com/wp-content/uploads/2020/07/Daybar_Dutti.jpg',
    reviews: {
      rating: 4.7,
      total: '800+',
    },
  },
  {
    id: '4',
    cost: 10,
    name: 'French Touch Pâtisserie',
    description: 'A charming French bakery in the heart of Munich, offering a delightful selection of pastries and coffee.',
    location: {
      latitude: 48.1368311,
      longitude: 11.5677244,
      street: 'Brunnstraße 4',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/hHnoFsccNRwUwtSc6',
    },
    imageUrl: 'https://www.sueddeutsche.de/2022/06/07/e0dd887a-f94d-498e-8214-ea6f81924d13.jpeg?q=60&fm=jpeg&width=1000&rect=0%2C139%2C1352%2C760',
    reviews: {
      rating: 4.9,
      total: '1.5k+',
    },
  },
  {
    id: '5',
    cost: 10,
    name: 'Champor',
    description: 'A cozy, Malaysian kitchen in Bogenhausen—run with Penang-style passion, aromatic curries, and a homey ambience that greets you like family',
    location: {
      latitude: 48.1457434,
      longitude: 11.6328901,
      street: 'Warthestraße 5',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/itGGSKtmugKpQyBQA',
    },
    imageUrl: 'https://www.champor.de/fileadmin/user_upload/Champor/Impressionen/Champor-Impressionen-2020-03.jpg',
    reviews: {
      rating: 4.6,
      total: '600+',
    },
  },
  {
    id: '6',
    cost: 10,
    name: 'Parabelrutsche',
    description: 'The Parabola Slide at TUM Garching is a 13-meter-high architectural landmark, offering a thrilling ride through the heart of the Math and Informatics building since 2002.',
    location: {
      latitude: 48.2625943,
      longitude: 11.6675242,
      street: 'Boltzmannstraße 3',
      city: 'Garching bei München',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/Bj46V6gRuEsaBqoe9',
    },
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiU-uhH2UMyggpvrDQAAFzBod3Xe6TFSZLzlQfkz4mFmem5eGbTVpKQaYsDXVopBbcNr8mglU2U_sWV_1HF7AGXSdqq6ojdmfmByPWOFfBbNWEG7zCgC4f3-xcKLc-lq-NrEEoDqqSAD4I/s640/Parabelrutsche++Parabole+Slide+Munchen+Munich+University+Technical+1.jpg',
    reviews: {
      rating: 4.3,
      total: '300+',
    },
  },
  {
    id: '7',
    cost: 10,
    name: 'Alexa von Harder',
    description: 'A hidden brunch gem with a cozy, bohemian vibe. Expect freshly baked breads, vibrant breakfast bowls, and artisanal coffee served in a floral-filled interior that feels like a warm embrace.',
    location: {
      latitude: 48.1404121,
      longitude: 11.5975686,
      street: 'Ismaninger Str. 50',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/R2L2vBuq3LpP5HNL9',
    },
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5ba3c1358d97404599440ab0/1560192196703-PA7VQIOS2773HGG06F5O/AlexavonHarder-Laden-3.jpg',
    reviews: {
      rating: 4.8,
      total: '50+',
    }
  },
  {
    id: '8',
    cost: 15,
    name: 'Madam Anna Ekke',
    description: 'A stylish brunch spot known for its laid-back charm and vibrant plates—from fluffy pancakes to creative egg dishes. With retro decor and a lively weekend crowd, it’s perfect for late mornings that stretch into the afternoon.',
    location: {
      latitude: 48.1497838,
      longitude: 11.5323028,
      street: 'Schlörstraße 11',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/PFQcJJKoJsCXxnJ68',
    },
    imageUrl: 'https://geheimtippmuenchen.de/content/uploads/2021/06/geheimtipp-muenchen-essenundtrinken-madameannaekke-neu-17.jpg',
    reviews: {
      rating: 4.5,
      total: '200+',
    }
  },
  {
    id: '9',
    cost: 20,
    name: 'SAM',
    description: 'A modern Japanese restaurant where minimalism meets flavor. Specializing in sushi with a twist, SAM offers omakase experiences and inventive small plates in a sleek setting.',
    location: {
      latitude: 48.1356681,
      longitude: 11.539747,
      street: 'Ligsalzstraße 30',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/MfuciW6Nv49rzNML6',
    },
    imageUrl: 'https://genuss-verliebt.de/wp-content/uploads/SAM-Sushi-Muenchen-768x576.jpg',
    reviews: {
      rating: 4.9,
      total: '500+',
    }
  },
  {
    id: '10',
    cost: 25,
    name: 'Terasse Café',
    description: 'Perched atop the TUM main building, this café offers unbeatable panoramic views of Munich’s skyline. A student favorite for coffee, pastries, and sunsets over the city.',
    location: {
      latitude: 48.1487289,
      longitude: 11.5669376,
      street: 'Arcisstraße 21',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/jkm3BPDaZ8pt1euj7',
    },
    imageUrl: 'https://www.tum.de/fileadmin/user_upload_87/_processed_/c/9/csm_20201008__Vorhoelzer_Forum_Terrasse_UB_-7112_692885980b.webp',
    reviews: {
      rating: 5.0,
      total: '20+',
    }
  },
  {
    id: '11',
    cost: 10,
    name: 'Museum Brandhorst',
    description: 'A contemporary art museum celebrated for its cutting-edge exhibitions and iconic architecture. Home to one of the largest Cy Twombly collections in Europe.',
    location: {
      latitude: 48.1481367,
      longitude: 11.5693636,
      street: 'Theresienstraße 35a',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/2x3GazPe6v5WdTun6'
    },
    imageUrl: 'https://www.museum-brandhorst.de/imgs/MBH005_RGB_A3-1280x1009.jpg',
    reviews: {
      rating: 4.3,
      total: '100+',
    }
  },
  {
    id: '12',
    cost: 15,
    name: 'Werksviertel München',
    description: 'An urban playground of creativity built on repurposed industrial grounds—brimming with art studios, tech hubs, rooftop bars, and the famous Hi-Sky Munich Ferris wheel.',
    location: {
      latitude: 48.1257061,
      longitude: 11.6029321,
      street: 'Atelierstraße 1',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/aSBj4yQ9h61tQvvM9',
    },
    imageUrl: 'https://www.werksviertel-mitte.de/imgs/IB5_0083_1920-1.jpg',
    reviews: {
      rating: 4.6,
      total: '500+',
    }
  },
  {
    id: '13',
    cost: 20,
    name: 'AAHHH OH',
    description: 'A rooftop lookout offering one of the most breathtaking panoramic views of Munich. A quiet escape where you can take in the skyline, watch the sunset, or snap that perfect cityscape shot.',
    location: {
      latitude: 48.1257042,
      longitude: 11.5849074,
      street: 'Speicherstraße 20',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/BbRzHMnJYt5rhceH7',
    },
    imageUrl: 'https://www.mucbook.de/wp-content/uploads/2022/05/IMG_AAC3C164C22E-1-e1652533853367.jpeg',
    reviews: {
      rating: 4.8,
      total: '300+',
    }
  },
  {
    id: '14',
    cost: 15,
    name: 'Endless Staircase',
    description: 'A mind-bending sculpture by Olafur Eliasson, this looping staircase is an architectural metaphor for infinity—an Instagram hotspot and a marvel of engineering curiosity.',
    location: {
      latitude: 48.1327815,
      longitude: 11.5353921,
      street: 'Ganghoferstraße 29A',
      city: 'Munich',
      country: 'Germany',
      googleMapsUrl: 'https://maps.app.goo.gl/E2En4L6oBD1fWrXF7',
    },
    imageUrl: 'https://themunichguide.de/wp-content/uploads/2020/03/umschreibung-endless-stair.jpg',
    reviews: {
      rating: 4.7,
      total: '50+',
    }
  }
];