import { duacard } from "@/assets/images";
import Image from "next/image";
import React from "react";

const MainSide = () => {
  return (
    <div>
      {/* search ber  */}

      <div className="flex justify-end ">
        <label className="input input-bordered bg-white flex items-center gap-2 mt-2 ">
          <input
            type="text"
            className="grow"
            placeholder="Search by Dua Name"
          />
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
        </label>
      </div>

      {/* category  */}

      <div className="mt-10  bg-white w-full p-5 rounded-md border">
        <h1 className="text-sm font-medium font-inter text-black ">
          <span className=" text-primary-color ">Section:</span> The servant is
          dependent on his Lord
        </h1>
      </div>
      {/* category  */}

      <div className="mt-10  bg-white w-full p-5 rounded-md border">
        <div className="flex items-center gap-4 text-[12px] font-medium font-inter text-black text-primary-color">
          <Image src={duacard} alt="dua"/> 
          1. The servant is dependent on his Lord #1
        </div>

        <h1 className="text-[13px] text-[#445666] font-inter font-normal mt-3 space-y-1">All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</h1>

      </div>
    </div>
  );
};

export default MainSide;
