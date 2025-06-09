
import { useState } from 'react';

import Sidebar from '../components/map/Sidebar';
import MapComponent from '../components/map/Map';
import Drawer from '../components/map/Drawer';
import Credits from '../components/Credits';
import Login from '../Login';

import { useUser } from '../contexts/UserContext';

export default function Map() {

  const { currentUser } = useUser();
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const toggleDrawer = (drawer: string | null) => {
    setOpenDrawer(prev => {
      if (prev === drawer) {
        return null; // Close if already open
      }
      return drawer; // Open the requested drawer
    })
  }


  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-100">

      {/* Collapsible Sidebar - Left on desktop, bottom on mobile */}
      <Sidebar toggleDrawer={toggleDrawer} />

      <Drawer drawer={openDrawer} closeDrawer={() => setOpenDrawer(null)} />
      
      <MapComponent />

      {/* Credits with proper positioning for Leaflet map */}
      <div className="absolute top-4 right-4 z-[1000]">
        {currentUser ? (
          <Credits />
        ) : (
          <Login />
        )}
      </div>
      
      
    </div>
  )
}