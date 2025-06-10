

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
    googleMapsUrl: string; // URL to Google Maps location
  };
  imageUrl: string;
  reviews?: {
    rating: number;
    total: string; // Total number of reviews as a string (e.g., "1.2k")
  }
}

export interface Review {
  id: string;
  userId: string;
  placeId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}