
import { Marker as LeafletMarker, Popup } from 'react-leaflet';

import type { Place } from '../../utils/types';
import { useUser } from '../../contexts/UserContext';

export default function Marker({ place }: { place: Place }) {

  const { currentUser, unlockPlace } = useUser();

  const unlock = (place: Place) => {
    unlockPlace(place.id, place.cost)
  }

  const showUnlockButton = currentUser?.unlockedPlaces.includes(place.id) === false;

  return (
    <LeafletMarker position={[place.location.latitude, place.location.longitude]}>
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
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
            <p className="text-gray-600 leading-relaxed">{place.description}</p>

            <div className="flex items-center justify-between pt-2">
              <div className="text-sm text-gray-500">
                📍 {place.location.city}, {place.location.country}
              </div>
              <div className="flex items-center space-x-2">
                {showUnlockButton && (
                    <button
                    onClick={() => unlock(place)}
                    className="px-4 py-2 !bg-orange-500 text-white text-sm font-semibold rounded-full hover:!bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {place.cost} credits
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </LeafletMarker>
  )
}