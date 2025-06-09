

export interface User {
  id: string;
  name: string;
  email: string;
  credits: number;
  unlockedPlaces: string[]; // Array of place IDs the user has unlocked
  recentPlaces: string[]; // Array of place IDs the user has recently visited
}

export interface Place {
  id: string;
  cost: number;
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    street: string;
    city: string;
    country: string;
  };
  imageUrl: string;
  reviews?: Review[]; // Optional reviews
}

export interface Review {
  id: string;
  userId: string;
  placeId: string;
  rating: number;
  comment: string;
  createdAt: string; // ISO date string
}