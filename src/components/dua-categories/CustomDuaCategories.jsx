import Image from "next/image";
import React from "react";

const CustomDuaCategories = ({ image, category, subcategory,count,countTitle,categoryTitles }) => {
  return (
    <div className="collapse cursor-pointer">
      <input type="checkbox" />
      <div className="collapse-title  ">
        <div className="flex flex-row justify-between items-center  bg-[#E8F0F5] p-2 rounded-md  w-full">
          <div className="flex justify-center items-center gap-5">
            <Image
              src={image}
              alt="dui"
              className="bg-white w-14 h-14 p-4 rounded-lg "
            />

            <div className="">
              <h1 className="text-[12px] text-black font-inter font-semibold">
                {/* Dua's Importance */}
                {category}
              </h1>
              <h2 className="text-[12px] font-inter mt-1">
                {/* Subcategory: 7 */}
                {subcategory}
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-[12px] text-black font-inter font-semibold">
              {/* 21 */}
              {count}
            </h1>
            <h5 className="text-[10px] font-inter mt-1">
                
                {/* Duas */}
                {countTitle}

            </h5>
          </div>
        </div>
      </div>
      <div className="collapse-content">
      <ul>
          {categoryTitles?.map((title, index) => (
            <li key={index} className="relative flex gap-2 font-semibold">
              <div className="before:absolute before:left-[5.5px] before:h-full before:border-l before:border-dotted before:border-primary-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  className="bi bi-circle ml-[1px] mt-[17px] text-primary-color"
                >
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
              </div>
              <div className="text-[12px] text-black font-inter mt-3">
                <p>{title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDuaCategories;
