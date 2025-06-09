
import { useMap } from "react-leaflet";

export default function ZoomControls(props: {
  center: [number, number],
  zoom: number
}) {

  const map = useMap();

  const zoomIn = () => {
    map.zoomIn();
  };
  const zoomOut = () => {
    map.zoomOut();
  };
  const centerMap = () => {
    map.setView(props.center, props.zoom);
  };

  return (
    <div className="absolute bottom-4 right-4 z-[1000] space-y-2">
      <button
        onClick={centerMap}
        className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        title="Center Map"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeLinecap="round" />
        </svg>
      </button>
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