
import { NavLink } from "react-router";
import Login from "../components/Login";
import Credits from "../components/Credits";

import { useUser } from "../contexts/UserContext";

export default function Home() {

  const { currentUser } = useUser();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-orange-50 to-orange-100 overflow-y-auto">      {/* Top Navigation Bar */}
      <div className="absolute top-0 right-0 p-6 z-10">
        {currentUser ? (
          <Credits />
        ) : (
          <Login />
        )}
      </div>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          <img
            src="/xplora_logo.png"
            alt="XPLORA Logo"
            className="w-96 h-auto md:w-196 md:h-auto mx-auto mb-12"
          />
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover amazing locations and embark on your next adventure with our interactive mapping experience
          </p> */}
          <NavLink 
            to="/map" 
            className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-orange-600 hover:!text-white hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Explore the Map →
          </NavLink>
        </div>
      </div>

      {/* Info Boxes Section */}
      <div className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">            {/* Info Box 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hidden Gems</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover secret spots and local experiences that only insiders know about. Uncover the authentic side of every destination.
              </p>
            </div>

            {/* Info Box 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your favorite spots and review places from fellow explorers. Build a trusted community of local discoverers.
              </p>
            </div>

            {/* Info Box 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlock & Earn</h3>
              <p className="text-gray-600 leading-relaxed">
                Gamify your exploration journey! Earn credits by visiting places and unlock exclusive locations as you level up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}