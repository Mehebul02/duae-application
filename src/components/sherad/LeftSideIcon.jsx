import React from 'react';

const LeftSideIcon = ({ICON}) => {
    return (
        <div className="flex justify-center items-center bg-[#EBEEF2] w-10 h-10 mx-auto rounded-full hover:bg-gray-300 transition-all cursor-pointer mb-3">
        <span className="text-md text-gray-500 hover:text-gray-700 transition-all">
          {ICON}
        </span>
      </div>
    );
};

export default LeftSideIcon;