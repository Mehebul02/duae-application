import { front, general, language, profile } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineFileDownload, MdOutlinePrivacyTip } from "react-icons/md";
import {
  AiOutlineSafetyCertificate,
  AiTwotoneSafetyCertificate,
} from "react-icons/ai";
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
            <Image src={profile} alt="profile" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-60 p-4 shadow space-y-3"
        >
          <li className="flex flex-row items-center text-black font-inter cursor-pointer">
         
            <span className="text-md text-primary-color hover:text-primary-color">
           
              <FaHandHoldingHeart />
            </span>
            Support Us
          </li>
          <li className="flex flex-row items-center text-black font-inter cursor-pointer">
            
            <span className="text-md text-primary-color hover:text-primary-color">
              
              <MdOutlineFileDownload />
            </span>
            Download Dua app
          </li>
          <li className="flex flex-row items-center text-black font-inter cursor-pointer">
           
            <span className="text-md text-primary-color hover:text-primary-color">
              
              <AiOutlineSafetyCertificate />
            </span>
            Privacy Policy
          </li>
        </ul>
      </div>

      {/* language */}

      <div className="bg-white border rounded-lg w-80">
        <h1 className="text-xl text-black text-center font-inter font-medium p-4">
          Settings
        </h1>
        <div className="gap-0">
          {/* 1st title  */}
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  ">
              <div className="flex flex-row justify-between items-center  bg-[#f9f9f9]  rounded-md  w-full">
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
              <div className=" space-x-10 flex justify-center">
                <button className="text-sm text-white  pl-4 pr-4 pt-1 pb-1 rounded-sm font-inter bg-primary-color">
                  English
                </button>
                <button className="text-sm text-black  pl-4 pr-4 pt-1 pb-1 rounded-sm font-inter border border-primary-color">
                  English
                </button>
              </div>
            </div>
          </div>
          {/* 2nd title  */}
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  ">
              <div className="flex flex-row justify-between items-center  bg-[#f9f9f9] p-2 rounded-md  w-full">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    src={general}
                    alt="dui"
                    className="bg-[#EBEEF2] w-11 h-11 p-4 rounded-full "
                  />

                  <div className="">
                    <h1 className="text-[12px] text-black font-inter font-semibold">
                      General Settings
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content"></div>
          </div>
          {/* 3rd title  */}
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  ">
              <div className="flex flex-row justify-between bg-[#f9f9f9] p-2 rounded-md  w-full">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    src={front}
                    alt="dui"
                    className="bg-[#EBEEF2] w-11 h-11 p-4 rounded-full "
                  />

                  <div className="">
                    <h1 className="text-[12px] text-black font-inter font-semibold">
                      General Settings
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className=" space-x-10 flex justify-center ">
                <h3 className="text-[12px] text-[#201d20] font-semibold">
                  Night Mode
                </h3>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller col-span-1 col-start-1 row-start-1 border-gray-500 bg-gray-300 [--tglbg:theme(colors.gray.500)] checked:border-gray-800 checked:bg-gray-700 checked:[--tglbg:theme(colors.gray.900)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
