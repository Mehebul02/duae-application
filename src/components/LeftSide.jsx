import { language, profile } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineFileDownload, MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineSafetyCertificate, AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
const LeftSide = () => {
  return (
    <div className=" ">
      <div className="dropdown dropdown-end ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 mx-auto  rounded-full">
            <Image src={profile} alt="profile"  />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-60 p-4 shadow space-y-3"
        >
          <li className="flex flex-row items-center text-black font-inter cursor-pointer"> <span className="text-md text-primary-color hover:text-primary-color"> <FaHandHoldingHeart/> </span> Support Us</li>
          <li className="flex flex-row items-center text-black font-inter cursor-pointer"> <span className="text-md text-primary-color hover:text-primary-color"> <MdOutlineFileDownload/> </span> Download Dua app</li>
          <li className="flex flex-row items-center text-black font-inter cursor-pointer"> <span className="text-md text-primary-color hover:text-primary-color"> <AiOutlineSafetyCertificate /> </span> Privacy Policy</li>
       
         
        </ul>
      </div>

       {/* language */}

     <div className="bg-white border rounded-lg w-80">
     <h1 className="text-xl text-black text-center font-inter font-medium p-4">Settings</h1>
           
     <div className="collapse ">
      <input type="checkbox" />
      <div className="collapse-title  ">
        <div className="flex flex-row justify-between items-center  bg-[#f9f9f9] p-2 rounded-md  w-full">
          <div className="flex justify-center items-center gap-5">
         
            <Image
              src={language} 
              alt="dui"
              className="bg-[#EBEEF2] w-11 h-11 p-4 rounded-full "
            />

            <div className="">
              <h1 className="text-[12px] text-black font-inter font-semibold">
              Language Settings
              
              </h1>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="collapse-content">
      

      xcdfvdsfsdfdsf
      </div>
    </div>
     </div>
    </div>
  );
};

export default LeftSide;
