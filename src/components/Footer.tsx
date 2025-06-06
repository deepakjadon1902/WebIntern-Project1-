// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Zap, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7] text-white shadow-inner">
//       <div className="container mx-auto px-6 py-14 md:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Logo and Description */}
//           <div>
//             <Link to="/" className="flex items-center mb-5 hover:brightness-110 transition">
//               <Zap className="h-8 w-8 text-yellow-400" />
//               <span className="ml-3 text-2xl font-extrabold tracking-wide drop-shadow-lg">
//                 EngageSphere
//               </span>
//             </Link>
//             <p className="text-yellow-100 mb-6 leading-relaxed max-w-xs">
//               Your premier destination for authentic social media engagement and growth services.
//             </p>
//             {/* Social Media Icons */}
//             <div className="flex space-x-6">
//               {[
//                 { Icon: Instagram, color: '#C13584' },
//                 { Icon: Twitter, color: '#1DA1F2' },
//                 { Icon: Facebook, color: '#1877F2' },
//                 { Icon: Linkedin, color: '#0077B5' },
//                 { Icon: Youtube, color: '#FF0000' },
//               ].map(({ Icon, color }, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="transition-colors drop-shadow-md"
//                   style={{ color }}
//                   aria-label="Social Media Link"
//                 >
//                   <Icon size={22} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider text-white">
//               Our Services
//             </h3>
//             <ul className="space-y-3 text-yellow-300">
//               {[
//                 'Youtube',
//                 'Instagram',
//                 'X',
//                 'Threads',
//                 'Telegram',
//                 'LinkedIn',
//                 'TikTok',
//                 'Facebook',
//               ].map((platform) => (
//                 <li key={platform}>
//                   <Link
//                     to={`/services/${platform.toLowerCase()}`}
//                     className="hover:text-yellow-400 transition-colors"
//                   >
//                     {platform} Services
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider">
//               Company
//             </h3>
//             <ul className="space-y-3 text-yellow-200">
//               {['about', 'contact', 'blog', 'careers'].map((page) => (
//                 <li key={page}>
//                   <Link
//                     to={`/${page}`}
//                     className="hover:text-yellow-400 transition-colors capitalize"
//                   >
//                     {page.replace(/^\w/, (c) => c.toUpperCase())}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider">
//               Legal
//             </h3>
//             <ul className="space-y-3 text-yellow-200">
//               {['terms', 'privacy', 'refund', 'faq'].map((page) => (
//                 <li key={page}>
//                   <Link
//                     to={`/${page}`}
//                     className="hover:text-yellow-400 transition-colors capitalize"
//                   >
//                     {page.replace(/^\w/, (c) => c.toUpperCase())} Policy
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-yellow-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-yellow-300 text-sm">
//           <p className="mb-4 md:mb-0 select-none">
//             &copy; {new Date().getFullYear()} EngageSphere. All rights reserved.
//           </p>
//           <div className="flex space-x-8">
//             {['terms', 'privacy', 'cookies'].map((page) => (
//               <Link
//                 key={page}
//                 to={`/${page}`}
//                 className="hover:text-yellow-400 transition-colors capitalize"
//               >
//                 {page}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7] text-white shadow-inner">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-5 hover:brightness-110 transition">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="ml-3 text-2xl font-extrabold tracking-wide drop-shadow-lg">
                EngageSphere
              </span>
            </Link>
            <p className="text-yellow-100 mb-6 leading-relaxed max-w-xs">
              Your premier destination for authentic social media engagement and growth services.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {[
                { Icon: Instagram, color: '#C13584' },
                { Icon: Twitter, color: '#1DA1F2' },
                { Icon: Facebook, color: '#1877F2' },
                { Icon: Linkedin, color: '#0077B5' },
                { Icon: Youtube, color: '#FF0000' },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-colors drop-shadow-md"
                  style={{ color }}
                  aria-label="Social Media Link"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-yellow-300">
              {[
                'Youtube',
                'Instagram',
                'X',
                'Threads',
                'Telegram',
                'LinkedIn',
                'TikTok',
                'Facebook',
              ].map((platform) => (
                <li key={platform}>
                  <Link
                    to={`/services/${platform.toLowerCase()}`}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {platform} Services
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3 text-yellow-300">
              {['about', 'contact', 'blog', 'careers'].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page}`}
                    className="hover:text-yellow-400 transition-colors capitalize"
                  >
                    {page.replace(/^\w/, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-yellow-400 pb-2 tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-yellow-300">
              {['terms', 'privacy', 'refund', 'faq'].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page}`}
                    className="hover:text-yellow-400 transition-colors capitalize"
                  >
                    {page.replace(/^\w/, (c) => c.toUpperCase())} Policy
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-yellow-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-yellow-300 text-sm">
          <p className="mb-4 md:mb-0 select-none">
            &copy; {new Date().getFullYear()} EngageSphere. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {['terms', 'privacy', 'cookies'].map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                className="hover:text-yellow-400 transition-colors capitalize"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
