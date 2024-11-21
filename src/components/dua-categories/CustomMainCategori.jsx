"use client"
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { CiBookmark } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineContentCopy, MdReportGmailerrorred } from 'react-icons/md';

const CustomMainCategori = ({image,title,description,reference, referenceTitle,}) => {

    const handleCopy = () => {
        toast.success("Copied" , {
            style: {
              background: "#000000", 
              color: "#ffff",         
            },
          });
        // Add your copy logic here, for example:
        navigator.clipboard.writeText("");
     
      };
    const handleMemories = () => {
        toast.success("Coming Soon In Sha Allah" , {
            style: {
              background: "#000000", 
              color: "#ffff",         
            },
          });
        // Add your copy logic here, for example:
        navigator.clipboard.writeText("Your text to copy");
      
      };
    const handleShare = () => {
        toast.success("Coming Soon In Sha Allah" , {
            style: {
              background: "#000000", 
              color: "#ffff",         
            },
          });
        // Add your copy logic here, for example:
        navigator.clipboard.writeText("Your text to copy");
      
      };
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
          
            
             <span onClick={handleCopy} className="tooltip" data-tip="Copy "> <MdOutlineContentCopy/> </span>
            <span onClick={handleShare} className="tooltip" data-tip="Bookmark"> <CiBookmark/> </span>
            <span onClick={handleMemories} className="tooltip" data-tip="Memories"> <FaRegLightbulb/> </span>
            <span onClick={handleShare} className="tooltip" data-tip="Share"> <IoShareSocialOutline/> </span>
            <span onClick={handleMemories} className="tooltip" data-tip="Report"> <MdReportGmailerrorred/> </span> 

          
        </div>
      </div>
        </div>
    );
};

export default CustomMainCategori;