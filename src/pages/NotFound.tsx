// import React from 'react';
// import { Link } from 'react-router-dom';
// import GlassContainer from '../components/GlassContainer';
// import { Home } from 'lucide-react';

// const NotFound: React.FC = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-24">
//       <GlassContainer className="max-w-md w-full p-8 text-center">
//         <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
//         <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
//         <p className="text-slate-600 mb-8">
//           The page you are looking for doesn't exist or has been moved.
//         </p>
//         <Link
//           to="/"
//           className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
//         >
//           <Home className="h-5 w-5 mr-2" />
//           Return Home
//         </Link>
//       </GlassContainer>
//     </div>
//   );
// };

// export default NotFound;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import GlassContainer from '../components/GlassContainer';
// import { Home } from 'lucide-react';

// const NotFound: React.FC = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 overflow-hidden px-4 py-28">
//       <GlassContainer className="relative max-w-md w-full p-10 rounded-3xl bg-white/30 border border-white/30 backdrop-blur-lg shadow-xl shadow-purple-400/50 text-black">
//         {/* Gradient Text with Faded Background */}
//         <h1 className="relative text-6xl font-extrabold text-center mb-6 tracking-wide bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent inline-block px-6 py-3">
//           <span
//             aria-hidden="true"
//             className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 opacity-30 -z-10"
//           />
//           404
//         </h1>

//         <h2 className="text-3xl font-extrabold text-center mb-4">
//           Page Not Found
//         </h2>
//         <p className="text-center text-black/80 mb-10">
//           The page you are looking for doesn't exist or has been moved.
//         </p>
//         <div className="text-center">
//           <Link
//             to="/"
//             className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-extrabold text-lg tracking-widest shadow-lg shadow-pink-600/70 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-400"
//           >
//             <Home className="h-6 w-6 mr-3" />
//             Return Home
//           </Link>
//         </div>
//       </GlassContainer>
//     </div>
//   );
// };

// export default NotFound;



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
