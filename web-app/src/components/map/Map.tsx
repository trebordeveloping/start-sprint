

import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Marker from './Marker';
import Credits from '../Credits';
import ZoomControls from './ZoomControls';
import { useUser } from '../../contexts/UserContext';
import { places } from '../../data/places';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {

  const [mapCenter, _setMapCenter] = useState<[number, number]>([48.1351, 11.5820]); // Munich, Germany
  const [mapZoom, _setMapZoom] = useState(13);

  const { currentUser } = useUser();

  return (
    <div className="flex-1 relative">
      {/* Leaflet Map Container */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false} // We'll use custom zoom controls
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />
        {places.map(place => (
          <Marker key={place.id} place={place} />
        ))}

        {/* Credits with proper positioning for Leaflet map */}
        <div className="absolute top-4 right-4 z-[1000]">
          {currentUser && (
            <Credits />
          )}
        </div>
        
        <ZoomControls />
        
      </MapContainer>
    </div>
  )
}