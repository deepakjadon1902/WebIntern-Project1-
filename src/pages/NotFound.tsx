
import React from 'react';
import { Link } from 'react-router-dom';
import GlassContainer from '../components/GlassContainer';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center
      bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-400
      px-4 py-28"
    >
      <GlassContainer className="relative max-w-md w-full p-10 rounded-3xl
        bg-white/30 border border-white/20 backdrop-blur-md shadow-lg
        shadow-blue-400/30 text-black"
      >
        {/* Application Name */}
        <h3 className="text-center text-xl font-bold mb-4 text-black">
          EngageSphere
        </h3>

        {/* Gradient Text with Faded Background */}
        <h1 className="relative text-6xl font-extrabold text-center mb-6 tracking-wide
          bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent inline-block px-6 py-3"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-md bg-gradient-to-r from-black via-gray-500 to-black opacity-10 -z-10"
          />
          404
        </h1>

        <h2 className="text-3xl font-extrabold text-center mb-4 text-black">
          Page Not Found
        </h2>
        <p className="text-center text-black/80 mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600
              hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl
              font-extrabold text-lg tracking-widest shadow-md shadow-blue-600/50
              transition-transform transform hover:scale-105 focus:outline-none focus:ring-4
              focus:ring-blue-300"
          >
            <Home className="h-6 w-6 mr-3" />
            Return Home
          </Link>
        </div>
      </GlassContainer>
    </div>
  );
};

export default NotFound;
