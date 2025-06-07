// Modern Login Button Component

import { useUser } from "../../contexts/UserContext";

export default function Login() {

  const { login } = useUser();

  return (
    <button
      onClick={login}
      className="group relative inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-200/50 shadow-lg hover:bg-white hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
    >
      {/* User Icon */}
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      {/* Login Text */}
      <span className="text-sm">Login</span>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 to-orange-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}