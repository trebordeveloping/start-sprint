
import Sidebar from '../components/map/Sidebar';
import MapComponent from '../components/map/Map';

export default function Map() {

  return (
    <div className="flex h-screen w-screen bg-gray-100">

      {/* Collapsible Sidebar */}
      <Sidebar/>

      {/* Map Area */}
      <MapComponent />
      
    </div>
  )
}