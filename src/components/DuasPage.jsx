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
    <div className="bg-white   rounded-lg ">
      <div className="flex justify-center items-center bg-primary-color w-80 h-14 rounded-t-md">
        <h1 className="text-md text-white">Categories</h1>
      </div>
      <div className="">
        <label className="input input-bordered bg-white flex items-center gap-2 mt-2 w-72 mx-auto">
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
        <div className="collapse-title  font-medium">
          <div className="flex flex-row justify-between gap-5 bg-[#E8F0F5] p-2 rounded-md">
            <Image src={dui} alt="dui" />
            <div className="">
              <h1 className="text-[14px] text-black font-inter font-semibold">Dua's Importance</h1>
              <h2 className="text-[12px] font-inter mt-1"> Subcategory: 7</h2>
            </div>
            <div>
              <h1>21</h1>
              <h5>Duas</h5>
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default DuasPage;
