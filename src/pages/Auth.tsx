
import React, { useState, useRef } from 'react';
import GlassContainer from '../components/GlassContainer';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const bubblesContainerRef = useRef<HTMLDivElement>(null);

  const createBubble = () => {
    if (!bubblesContainerRef.current) return;

    const bubble = document.createElement('span');
    const size = Math.random() * 20 + 10; // 10 to 30px
    bubble.style.width = bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // 3 to 6 seconds
    bubble.className = 'bubble';
    bubblesContainerRef.current.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 6000);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      createBubble();
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, name });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-[#1a2a6c] p-6"
      style={{ fontSize: '18px' }} // base font size increased
    >
      {/* Bubbles background container */}
      <div
        ref={bubblesContainerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <GlassContainer className="relative max-w-md w-full p-12 rounded-3xl bg-white/90 border border-gray-300 backdrop-blur-lg shadow-xl shadow-purple-400/50 text-black">
        <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide drop-shadow-sm">
          {isSignIn ? 'Welcome Back' : 'Create Account'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {!isSignIn && (
            <div>
              <label
                htmlFor="name"
                className="block text-base font-semibold mb-3 tracking-wide text-black/90"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-purple-700" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={handleInputChange(setName)}
                  className="w-full pl-16 pr-5 py-4 rounded-xl bg-white border border-purple-400 placeholder-purple-600
                    text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition text-lg"
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold mb-3 tracking-wide text-black/90"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-purple-700" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="w-full pl-16 pr-5 py-4 rounded-xl bg-white border border-purple-400 placeholder-purple-600
                  text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition text-lg"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-base font-semibold mb-3 tracking-wide text-black/90"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-purple-700" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                className="w-full pl-16 pr-5 py-4 rounded-xl bg-white border border-purple-400 placeholder-purple-600
                  text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition text-lg"
                placeholder="••••••••"
                required
                autoComplete={isSignIn ? 'current-password' : 'new-password'}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-5 rounded-xl font-extrabold text-xl tracking-widest shadow-lg shadow-blue-700/80 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 text-white flex justify-center items-center"
          >
            {isSignIn ? 'Sign In' : 'Create Account'}
            <ArrowRight className="inline ml-3 h-7 w-7" />
          </button>
        </form>

        <div className="mt-12 text-center text-purple-900 font-semibold cursor-pointer select-none">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="underline hover:text-pink-700 transition-colors text-lg"
            aria-label={isSignIn ? 'Switch to sign up' : 'Switch to sign in'}
          >
            {isSignIn
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </button>
        </div>
      </GlassContainer>

      {/* Custom styles for bubbles */}
      <style>{`
        .bubble {
          position: absolute;
          bottom: -40px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
          animation-name: riseBubble;
          animation-timing-function: ease-out;
          animation-iteration-count: 1;
          pointer-events: none;
          mix-blend-mode: screen;
          z-index: 0;
        }
        @keyframes riseBubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;
