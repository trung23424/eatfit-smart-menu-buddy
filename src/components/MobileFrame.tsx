
import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
  bottomNavigation?: React.ReactNode;
}

const MobileFrame = ({ children, bottomNavigation }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[50px] p-2 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[42px] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-50"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full overflow-y-auto pt-6 pb-20">
              {children}
            </div>
            
            {/* Bottom Navigation - Fixed inside phone frame */}
            {bottomNavigation && (
              <div className="absolute bottom-2 left-2 right-2 z-50">
                {bottomNavigation}
              </div>
            )}
            
            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute -left-1 top-32 w-1 h-16 bg-gray-800 rounded-l"></div>
        <div className="absolute -left-1 top-52 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute -left-1 top-68 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute -right-1 top-44 w-1 h-20 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
};

export default MobileFrame;
