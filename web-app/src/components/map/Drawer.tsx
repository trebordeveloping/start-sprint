
import { useState, useEffect } from 'react';

import { useUser } from '../../contexts/UserContext';
import { places } from '../../data/places';
import type { Place } from '../../utils/types';

export default function Drawer(props: {
  drawer: string | null;
  closeDrawer: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { currentUser } = useUser();

  useEffect(() => {
    if (props.drawer) {
      // Opening drawer
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10); // Small delay for CSS transition
    } else if (isVisible) {
      // Closing drawer
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300); // Match transition duration
    }
  }, [props.drawer, isVisible]);

  // Don't render at all if not visible
  if (!isVisible) return null;

  const Header = () => (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">
        {props.drawer === 'unlocked' ? 'Unlocked Content' : 'Recent Content'}
      </h2>
      <CloseButton />
    </div>
  )

  const CloseButton = () => (
    <button
      className="text-gray-500 hover:text-gray-700 !bg-transparent hover:!bg-gray-100"
      onClick={props.closeDrawer}
      title="Close Drawer"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )

  const Place = ({ place }: { place: Place }) => (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
      <div className="flex items-start space-x-3">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm truncate">
            {place.name}
          </h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {place.description}
          </p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {place.location.city}, {place.location.country}
          </div>
        </div>
      </div>
    </div>
  )

  
  const Unlocked = () => {
    const unlockedPlaceObjects = currentUser?.unlockedPlaces 
      ? places.filter(place => currentUser.unlockedPlaces.includes(place.id))
      : [];

    return (
      <div>
        {unlockedPlaceObjects.length > 0 ? (
          <div className="space-y-3">
            {unlockedPlaceObjects.map(place => (
              <Place key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-gray-500 text-sm">No places unlocked yet</p>
            <p className="text-gray-400 text-xs mt-1">Unlock places to see them here</p>
          </div>
        )}
      </div>
    );
  }
  
  const Recent = () => {
    const recentPlaceObjects = currentUser?.recentPlaces 
      ? places.filter(place => currentUser.recentPlaces.includes(place.id))
      : [];

    return (
      <div>
        {recentPlaceObjects.length > 0 ? (
          <div className="space-y-3">
            {recentPlaceObjects.map(place => (
              <Place key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-gray-500 text-sm">No recent places</p>
            <p className="text-gray-400 text-xs mt-1">Explore!</p>
          </div>
        )}
      </div>
    );  }
  
  return (
    <div 
      className={`absolute z-[1001] bg-white shadow-lg transition-transform duration-300 ease-in-out
        md:top-0 md:left-24 md:w-80 md:h-full md:border-r md:border-gray-300 md:p-4
        bottom-0 left-0 w-full h-2/3 border-t border-gray-300 p-4
        ${isAnimating 
          ? 'translate-y-0 md:translate-y-0 md:translate-x-0' 
          : 'translate-y-full md:translate-y-0 md:-translate-x-full'
        }`}
    >
      <Header />
      <div className="overflow-y-auto h-full pb-4">
        {props.drawer === 'unlocked' && <Unlocked />}
        {props.drawer === 'recent' && <Recent />}
      </div>
    </div>
  )
}