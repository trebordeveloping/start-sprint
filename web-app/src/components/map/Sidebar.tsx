
import { useState } from 'react';
import { NavLink } from 'react-router';

export default function Sidebar() {

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(prev => !prev);

  return (
    <div className={`
        bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out
        ${open ? 'w-80' : 'w-24'}
      `}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {open && (
          <h2 className="text-xl font-semibold text-gray-800">Map Controls</h2>
        )}
        <button
          onClick={toggleOpen}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>      {/* Navigation */}
      <div className="p-4 border-b border-gray-200">
        {open ? (
          <NavLink 
            to="/" 
            className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </NavLink>
        ) : (
          <NavLink 
            to="/" 
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors duration-200" 
            title="Back to Home"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </NavLink>
        )}
      </div>      {/* Sidebar Content */}
      <div className="p-4">
        {/* Content can be added here in the future */}
      </div>
    </div>
  )
}