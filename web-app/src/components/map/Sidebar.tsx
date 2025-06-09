

import { NavLink } from 'react-router';

import { useUser } from '../../contexts/UserContext';

export default function Sidebar(props: {
  toggleDrawer: (drawer: string | null) => void;
}) {

  const { currentUser } = useUser();

  const showUserOptions = currentUser !== null;

  return (
    <div className={`
      bg-white border-r md:border-r border-t md:border-t-0 border-gray-200 shadow-lg transition-all duration-300 ease-in-out 
      z-[1001]
      w-full md:w-24 h-20 md:h-full 
      flex flex-row md:flex-col items-center justify-evenly md:justify-start 
      py-2 md:py-4 px-4 md:px-0 md:space-y-6 
      order-2 md:order-1`
    }>
      <div className="flex flex-col items-center">
        <NavLink
          to="/"
          className="w-12 h-12 flex items-center justify-center rounded hover:bg-gray-100 transition-colors duration-200"
          title="Back to Home"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </NavLink>
        <span className="text-xs text-gray-600 mt-1 hidden md:block">Home</span>
      </div>

      {showUserOptions && (
        <>
          <div className="w-12 h-px bg-gray-300 mb-0 md:mb-4 hidden md:block"></div>

          <div className="flex flex-col items-center">
            <button
              className="w-12 h-12 flex items-center justify-center rounded !bg-transparent hover:!bg-gray-100 transition-colors duration-200"
              title="Unlocked"
              onClick={() => props.toggleDrawer('unlocked')}
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="text-xs text-gray-600 mt-1 hidden md:block">Unlocked</span>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="w-12 h-12 flex items-center justify-center rounded !bg-transparent hover:!bg-gray-100 transition-colors duration-200"
              title="Recent"
              onClick={() => props.toggleDrawer('recent')}
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="text-xs text-gray-600 mt-1 hidden md:block">Recent</span>
          </div>
        </>
      )}


    </div>
  )
}