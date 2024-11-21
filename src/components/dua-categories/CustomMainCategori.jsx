import Image from 'next/image';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineContentCopy, MdReportGmailerrorred } from 'react-icons/md';

const CustomMainCategori = ({image,title,description,reference, referenceTitle,}) => {
    return (
        <div>
             <div className="mt-5  bg-white w-full p-5 rounded-md border">
        <div className="flex items-center gap-4 text-[12px] font-medium font-inter  text-primary-color">
          <Image src={image} alt="dua" />
         {title}
        </div>

        <h1 className="text-[13px] text-[#445666] font-inter font-normal mt-3 space-y-1">
          {description}
        </h1>
        <h1 className="text-[12px] mt-2 font-inter text-primary-color">{reference}</h1>
        <h1 className="text-[12px] mt-2 font-inter text-black font-medium">{referenceTitle}</h1>
        {/* icon  */}
        <div className="flex gap-5 justify-end cursor-pointer">
          
            
             <span> <MdOutlineContentCopy/> </span>
            <span> <CiBookmark/> </span>
            <span> <FaRegLightbulb/> </span>
            <span> <IoShareSocialOutline/> </span>
            <span> <MdReportGmailerrorred/> </span> 

          
        </div>
      </div>
        </div>
    );
};

export default CustomMainCategori;