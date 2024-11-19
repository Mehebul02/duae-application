import { dui } from "@/assets/images";
import Image from "next/image";
import React from "react";

const DuasPage = () => {
  const timelineData = [
    {
      title: "Dua's Importance (21)",
      items: [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        // ... other items
      ],
    },
    // ... other categories
  ];
  return (
    <div className="">
        <h1 className="text-xl text-black font-inter mb-2">Duas Page</h1>
        <div className="bg-white border  rounded-lg ">

<div className="flex justify-center items-center bg-primary-color w-96 h-14 rounded-t-md">
  <h1 className="text-md text-white font-inter">Categories</h1>
</div>
<div className="p-2">
  <label className="input input-bordered bg-white flex items-center gap-2 mt-2  mx-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
    <input type="text" className="grow" placeholder="Search Categories" />
  </label>
</div>

<div className="collapse ">
  <input type="checkbox" />
  <div className="collapse-title  ">
    <div className="flex flex-row justify-between items-center  bg-[#E8F0F5] p-2 rounded-md  w-full">
     
    <div className="flex justify-center items-center gap-5">
    <Image src={dui} alt="dui" className="bg-white w-14 h-14 p-4 rounded-lg "/>
     
     <div className="">
       <h1 className="text-[14px] text-black font-inter font-semibold">Dua's Importance</h1>
       <h2 className="text-[12px] font-inter mt-1"> Subcategory: 7</h2>
     </div>
    </div>
      <div>
        <h1 className="text-[14px] text-black font-inter font-semibold">21</h1>
        <h5 className="text-[10px] font-inter mt-1">Duas</h5>
      </div>
    </div>
  </div>
  <div className="collapse-content">
  <ul>
  
  <li className="relative flex gap-2  ">
    <div className="before:absolute before:left-[5.5px] before:h-full before:border-l before:border-dotted before:border-primary-color">
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-circle ml-[1px]  text-primary-color">
  <circle cx="4" cy="4" r="4" fill="currentColor"/>
</svg>


    </div>
    <div className="text-[12px] text-black font-inter font-semibold">
      <p className="">The servant is dependent on his Lord</p>
    </div>
  </li>
  <li className="relative flex gap-2 font-semibold">
    <div className="before:absolute before:left-[5.5px] before:h-full before:border-l before:border-dotted before:border-primary-color ">
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-circle ml-[1px] mt-[17px] text-primary-color">
  <circle cx="4" cy="4" r="4" fill="currentColor"/>
</svg>


    </div>
    <div className="text-[12px] text-black font-inter mt-3">
      <p className="">The servant is dependent on his Lord</p>
    </div>
  </li>
  <li className="relative flex gap-2 font-semibold">
    <div className="before:absolute before:left-[5.5px] before:h-full before:border-l before:border-dotted before:border-primary-color ">
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-circle ml-[1px] mt-[17px] text-primary-color">
  <circle cx="4" cy="4" r="4" fill="currentColor"/>
</svg>


    </div>
    <div className="text-[12px] text-black font-inter mt-3">
      <p className="">The servant is dependent on his Lord</p>
    </div>
  </li>
  
</ul>



  </div>
</div>
</div>
    </div>
  );
};

export default DuasPage;
