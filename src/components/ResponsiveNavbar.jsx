// Responsive navbar component for the Identity Systems Visualizer
import React, { useState } from 'react';

const ResponsiveNavbar = ({ activeView, setActiveView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMenuOpen(false); // Close menu after selection on mobile
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop and mobile navigation container */}
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg sm:text-xl hidden sm:block">Identity Systems Visualizer</span>
          </div>

          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden sm:block">
            <div className="flex space-x-1 md:space-x-4">
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeView === 'dashboard' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
                onClick={() => handleNavClick('dashboard')}
              >
                Dashboard
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeView === 'architectures' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
                onClick={() => handleNavClick('architectures')}
              >
                Architectures
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeView === 'comparison' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
                onClick={() => handleNavClick('comparison')}
              >
                Analysis
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeView === 'usecases' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
                onClick={() => handleNavClick('usecases')}
              >
                Use Cases
              </button>
            </div>
          </div>

          
          {/* Mobile menu button - only visible on mobile */}
          <div className="absolute inset-y-0 right-16 flex items-center sm:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-800 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-indigo-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeView === 'dashboard' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
            onClick={() => handleNavClick('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeView === 'architectures' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
            onClick={() => handleNavClick('architectures')}
          >
            System Architectures
          </button>
          <button 
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeView === 'comparison' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
            onClick={() => handleNavClick('comparison')}
          >
            Comparative Analysis
          </button>
          <button 
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeView === 'usecases' ? 'bg-indigo-900 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}
            onClick={() => handleNavClick('usecases')}
          >
            Use Cases
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;