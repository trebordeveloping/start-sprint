import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect } from 'react';

import type { Place } from '../../utils/types';
import { useUser } from '../../contexts/UserContext';

export default function Marker({ place }: { place: Place }) {

  const { currentUser, unlockPlace } = useUser();
  const [isRevealing, setIsRevealing] = useState(false);
  const [wasUnlocked, setWasUnlocked] = useState(false);

  const unlock = (place: Place) => {
    unlockPlace(place.id, place.cost)
  }

  const isUnlocked = currentUser?.unlockedPlaces.includes(place.id) || false;

  // Trigger reveal animation when place gets unlocked
  useEffect(() => {
    if (!wasUnlocked && isUnlocked) {
      setIsRevealing(true);
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsRevealing(false);
      }, 1500);
    }
    setWasUnlocked(isUnlocked);
  }, [isUnlocked, wasUnlocked]);
  // Create custom marker icons based on unlock status
  const createCustomIcon = (isUnlocked: boolean) => {
    const color = isUnlocked ? '#10B981' : '#F97316'; // Green for unlocked, Orange for locked
    const iconHtml = `
      <div style="
        background-color: ${color};
        width: 35px;
        height: 35px;
        border-radius: 50% 50% 50% 0;
        border: 4px solid white;
        transform: rotate(-45deg);
        box-shadow: 0 3px 12px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          color: white;
          font-size: 16px;
          font-weight: bold;
          transform: rotate(45deg);
        ">
          ${isUnlocked ? '✓' : '🔒'}
        </div>
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [35, 35],
      iconAnchor: [17, 35],
      popupAnchor: [1, -35],
    });
  };

  const GoogleMapsButton = () => (
    <button
      className="px-4 py-2 !bg-orange-500 text-white text-sm font-semibold rounded-full hover:!bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
      onClick={() => window.open(place.location.googleMapsUrl, '_blank')}
    >
      <svg
        className="w-5 h-5 text-white-500 hover:text-white-700 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </button>
  )
  const UnlockButton = () => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        unlock(place);
      }}
      className="px-4 py-2 !bg-orange-500 text-white text-sm font-semibold rounded-full hover:!bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
    >
      {place.cost} credits
    </button>
  )

  return (
    <LeafletMarker
      position={[place.location.latitude, place.location.longitude]}
      icon={createCustomIcon(isUnlocked)}
    >
      <Popup
        className="custom-popup"
        minWidth={280}
        maxWidth={320}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-2xl">

          <div className="mb-4">
            <img
              src={place.imageUrl}
              alt={place.name}
              className="w-full h-40 object-cover rounded-xl shadow-lg"
            />
            {isRevealing && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent transform -translate-x-full animate-shimmer"
                style={{
                  animation: 'shimmer 1.5s ease-out forwards'
                }}
              />
            )}
          </div>
          <div className="space-y-3">

            <h3
              className={`text-xl font-bold text-gray-800 transition-all duration-1000 ease-out ${!isUnlocked ? 'blur-sm' : ''
                } ${isRevealing ? 'animate-pulse' : ''
                }`}
              style={{
                animation: isRevealing ? 'revealText 1.5s ease-out forwards' : undefined
              }}
            >
              {place.name}
            </h3>


            <p className="text-gray-600 leading-relaxed">{place.description}</p>

            <div className="flex items-center justify-between pt-2">
              <div className="text-sm text-gray-500">
                📍 {place.location.city}, {place.location.country}
              </div>
              <div className="flex items-center space-x-2">
                {currentUser && (isUnlocked ? (
                  <GoogleMapsButton />
                ) : (
                  <UnlockButton />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </LeafletMarker>
  )
}