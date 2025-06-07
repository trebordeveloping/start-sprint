
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import type { User } from '../utils/types';
import { users } from '../data/users';

const UserContext = createContext<{
  currentUser: User | null;
  resetCreditsAndPlaces: () => void;
  login: () => void;
  logout: () => void;
  unlockPlace: (placeId: string, cost: number) => void;
}>({
  currentUser: null,
  resetCreditsAndPlaces: () => {},
  login: () => {},
  logout: () => {},
  unlockPlace: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // 🧠 Load user from localStorage on first mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.warn("Invalid user data in localStorage");
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
      };
    });
  }

  const login = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      // If no user is stored, set a default fake user
      setCurrentUser(users[0] || null);
    }
  }

  const logout = () => {
    setCurrentUser(null);
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
  
  const value = {
    currentUser,
    resetCreditsAndPlaces,
    login,
    logout,
    unlockPlace,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}