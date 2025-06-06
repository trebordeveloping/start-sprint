

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom zoom control component
function ZoomControls() {
  const map = useMap();
  
  const zoomIn = () => {
    map.zoomIn();
  };
  
  const zoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className="absolute top-4 right-4 z-[1000] space-y-2">
      <button 
        onClick={zoomIn}
        className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        title="Zoom In"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      <button 
        onClick={zoomOut}
        className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        title="Zoom Out"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
    </div>
  );
}

export default function Map() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.1351, 11.5820]); // Munich, Germany
  const [mapZoom, setMapZoom] = useState(13);

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

        {/* Sample marker */}
        <Marker position={mapCenter}>
          <Popup>
            <div>
              <h3 className="font-semibold">Sample Location</h3>
              <p className="text-sm text-gray-600">This is a sample marker on the map.</p>
            </div>
          </Popup>
        </Marker>

        {/* Custom zoom controls */}
        <ZoomControls />
      </MapContainer>
    </div>
  )
}