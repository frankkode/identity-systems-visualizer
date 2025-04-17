// Footer component with contact information
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-gray-800">Identity Systems Visualizer</span>
            </div>
          </div>
          
          <div className="text-center md:text-left text-gray-600 text-sm">
            <p>This identity system visualization was developed based on thesis research results.</p>
            <p className="mt-1">
              For more information Contact: <a href="mailto:masabo.frank@iu-study.org" className="text-indigo-600 hover:text-indigo-800 transition-colors">masabo.frank@iu-study.org</a>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;