
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import type { User } from '../utils/types';
import { newUpdate } from '../utils/newUpdate';
import { users } from '../data/users';

const UserContext = createContext<{
  currentUser: User | null;
  resetCreditsAndPlaces: () => void;
  login: () => void;
  logout: () => void;
  unlockPlace: (placeId: string, cost: number) => void;
  submitReview: (placeId: string, rating: number, comment: string) => void;
}>({
  currentUser: null,
  resetCreditsAndPlaces: () => {},
  login: () => {},
  logout: () => {},
  unlockPlace: () => {},
  submitReview: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

const isUserExpired = (lastLoggedIn: string | null): boolean => {
  if (!lastLoggedIn) return true; // No last login means expired

  const lastLoginDate = new Date(lastLoggedIn);
  
  return lastLoginDate < newUpdate;
}

export function UserProvider({ children }: { children: React.ReactNode }) {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // 🧠 Load user from localStorage on first mount
  useEffect(() => {
    try {
      const lastLoggedInStr = localStorage.getItem('lastLoggedIn');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const storedUser = localStorage.getItem('user');
      if (isLoggedIn && storedUser && !isUserExpired(lastLoggedInStr)) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.warn("Invalid user data in localStorage");
      localStorage.removeItem('lastLoggedIn');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    }
  }, []);

  // 💾 Save to localStorage every time currentUser changes
  useEffect(() => {
    try {
      if (currentUser) {
        const json = JSON.stringify(currentUser);
        localStorage.setItem('user', json);
      }
    } catch (err) {
      console.error('Error saving user to localStorage:', err);
    }
  }, [currentUser]);

  const resetCreditsAndPlaces = () => {
    setCurrentUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        credits: 150, // Reset to default credits
        unlockedPlaces: [], // Reset unlocked places
        recentPlaces: [], // Reset recent places
        reviews: [], // Reset reviews
      };
    });
  }

  const login = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && !isUserExpired(localStorage.getItem('lastLoggedIn'))) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      // If no user is stored, set a default fake user
      setCurrentUser(users[0] || null);
    }
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('lastLoggedIn', new Date().toISOString());
  }

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('isLoggedIn');
  }

  const unlockPlace = (placeId: string, cost: number) => {
    if (!currentUser) return;

    const prevPlaces = currentUser.unlockedPlaces || [];
    const prevCredits = currentUser.credits || 0;

    if (prevPlaces.includes(placeId)) {
      console.warn(`Place ${placeId} is already unlocked.`);
      return;
    }

    const updatedUser = {
      ...currentUser,
      unlockedPlaces: [...prevPlaces, placeId],
      credits: prevCredits - cost,
    }

    setCurrentUser(updatedUser);
  }

  const submitReview = (placeId: string, rating: number, comment: string) => {
    if (!currentUser) return;

    const newReview = {
      id: `${Date.now()}`, // Simple unique ID based on timestamp
      userId: currentUser.id,
      placeId,
      rating,
      comment,
      createdAt: new Date(),
    };

    setCurrentUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        credits: prev.credits + 5,
        reviews: [...(prev.reviews || []), newReview],
      };
    });
  }
  
  const value = {
    currentUser,
    resetCreditsAndPlaces,
    login,
    logout,
    unlockPlace,
    submitReview,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}