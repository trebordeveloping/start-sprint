
import { useState } from 'react';

import Sidebar from '../components/map/Sidebar';
import MapComponent from '../components/map/Map';
import Drawer from '../components/map/Drawer';

export default function Map() {

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

      {/* Map Area */}
        <Drawer drawer={openDrawer} closeDrawer={() => setOpenDrawer(null)} />
        <MapComponent />
      {/* <div className='flex-1 relative order-1 md:order-2 h-full w-full'>
      </div> */}
      
    </div>
  )
}