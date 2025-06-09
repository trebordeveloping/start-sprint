
import { useUser } from "../contexts/UserContext";
import { useState, useRef, useEffect } from "react";

export default function Credits() {

  const { currentUser, resetCreditsAndPlaces, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    
    <div 
      ref={dropdownRef}
      onClick={toggleDropdown}
      className="group relative inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-200/50 shadow-lg hover:bg-white hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Coin/Credits Icon */}
      <svg 
        className="w-5 h-5 mr-2 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      
      {/* Credits Amount */}
      <span className="text-sm">{currentUser?.credits.toLocaleString()}</span>
        {/* Credits Label */}
      <span className="text-xs text-gray-600 ml-1">credits</span>
      
      {/* Mobile indicator - small chevron */}
      <svg 
        className={`w-3 h-3 ml-2 text-gray-500 transition-transform duration-200 md:hidden ${
          isDropdownOpen ? 'rotate-180' : ''
        }`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 to-orange-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* User Details Hover Box */}
      <div className={`absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-2xl transform transition-all duration-300 ease-out z-20 ${
        isDropdownOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
      }`}>        <div className="p-6" onClick={(e) => e.stopPropagation()}>
          {/* Reset Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              resetCreditsAndPlaces();
            }}
            className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full flex items-center justify-center transition-colors duration-200 group/reset"
            title="Reset Credits and Places"
          >
            <svg 
              className="w-4 h-4 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
          </button>
          
          {/* User Profile Section */}
          <div className="flex items-center mb-4">
            {/* User Avatar */}
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg 
                className="w-6 h-6 text-orange-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
            </div>
            
            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {currentUser?.name || 'Guest User'}
              </h3>
              <p className="text-sm text-gray-600 truncate">
                {currentUser?.email || 'guest@example.com'}
              </p>
            </div>
          </div>
          
          {/* Credits Summary */}
          <div className="bg-orange-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Total Credits</span>
              <div className="flex items-center">
                <svg 
                  className="w-4 h-4 text-orange-600 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-lg font-bold text-orange-700">
                  {currentUser?.credits.toLocaleString() || '0'}
                </span>
              </div>
            </div>
          </div>
            {/* Logout Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLogout();
            }}
            className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200 group/btn"
          >
            <svg 
              className="w-4 h-4 mr-2 group-hover/btn:text-red-600 transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
            <span className="group-hover/btn:text-red-600 transition-colors duration-200">
              Logout
            </span>
          </button>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-transparent rounded-2xl pointer-events-none"></div>
      </div>
    </div>
  );
}