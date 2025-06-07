
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#001f4d] via-[#002966] to-[#003366] shadow-xl py-3'
          : 'bg-gradient-to-r from-[#001f4d] via-[#002966] to-[#003366] py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and App Name */}
          <Link to="/" className="flex items-center">
            <Zap className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">
              EngageSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 hover:scale-105 font-semibold text-base transition-all duration-200"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-yellow-300 hover:scale-105 font-semibold text-base transition-all duration-200 flex items-center">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-[#002244] rounded-lg shadow-lg border border-gray-700 p-5 grid gap-3">
                  {[
                    ['youtube', '#FF0000'],
                    ['instagram', 'linear-gradient(to right, #e1306c, #fd1d1d, #f56040)'],
                    ['x', '#000000'],
                    ['threads', '#1a1a1a'],
                    ['telegram', '#229ED9'],
                    ['linkedin', '#0077B5'],
                    ['tiktok', 'linear-gradient(45deg, #69C9D0, #EE1D52)'],
                    ['facebook', '#1877F2'],
                  ].map(([platform, bg]) => (
                    <Link
                      key={platform}
                      to={`/services/${platform}`}
                      className="text-white px-3 py-2 rounded-md capitalize font-semibold text-sm transition-colors"
                      style={{
                        background: bg.startsWith('linear') ? bg : `${bg}`,
                      }}
                    >
                      {platform}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/learn-more"
              className="text-white hover:text-yellow-300 hover:scale-105 font-semibold text-base transition-all duration-200"
            >
              Learn More
            </Link>
            <Link
              to="/auth"
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-base transition-all"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#001f4d] via-[#002966] to-[#003366] border-t border-slate-700 mt-2 py-5">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 font-semibold py-2 text-lg transition-all"
            >
              Home
            </Link>
            <Link
              to="/learn-more"
              className="text-white hover:text-yellow-300 font-semibold py-2 text-lg transition-all"
            >
              Learn More
            </Link>
            <div className="border-t border-slate-600 pt-3">
              <p className="text-sm font-semibold text-gray-300 mb-2">Services</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['youtube', '#FF0000'],
                  ['instagram', 'linear-gradient(to right, #e1306c, #fd1d1d, #f56040)'],
                  ['x', '#000000'],
                  ['threads', '#1a1a1a'],
                  ['telegram', '#229ED9'],
                  ['linkedin', '#0077B5'],
                  ['tiktok', 'linear-gradient(45deg, #69C9D0, #EE1D52)'],
                  ['facebook', '#1877F2'],
                ].map(([platform, bg]) => (
                  <Link
                    key={platform}
                    to={`/services/${platform}`}
                    className="text-white text-center py-2 rounded-md capitalize font-semibold text-base transition-all"
                    style={{
                      background: bg.startsWith('linear') ? bg : `${bg}`,
                    }}
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-5">
              <Link
                to="/auth"
                className="block text-center bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
