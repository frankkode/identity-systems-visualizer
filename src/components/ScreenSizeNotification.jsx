import React, { useState, useEffect } from 'react';

const ScreenSizeNotification = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Considers screens smaller than 768px as small
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Check if user has previously dismissed the notification
    const dismissed = localStorage.getItem('screenSizeNotificationDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const dismissNotification = () => {
    setIsDismissed(true);
    localStorage.setItem('screenSizeNotificationDismissed', 'true');
  };
  
  if (!isSmallScreen || isDismissed) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-indigo-600 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-indigo-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">
            For the best experience viewing simulations and flow animations, please use a larger screen device.
          </p>
          <p className="mt-1 text-xs">
            Press the "System Architectures" button to explore interactive visualizations.
          </p>
          <div className="mt-2">
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none"
              onClick={() => setActiveView('architectures')}
            >
              Go to System Architectures
            </button>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="inline-flex text-indigo-200 hover:text-white"
            onClick={dismissNotification}
          >
            <span className="sr-only">Dismiss</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenSizeNotification;