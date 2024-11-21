import { duacard } from "@/assets/images";
import React from "react";
import CustomMainCategori from "./dua-categories/CustomMainCategori";

const MainSide = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Search bar */}
      <div className="flex justify-end p-4 ">
        <label className="input input-bordered bg-white flex items-center gap-2  max-w-md">
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

      {/* Scrollable container */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Section header */}
        <div className="bg-white w-full p-5 rounded-md border mb-4">
          <h1 className="text-sm font-medium font-inter text-black">
            <span className="text-primary-color">Section:</span> The servant is
            dependent on his Lord
          </h1>
        </div>

        {/* Content */}
        <CustomMainCategori
          image={duacard}
          title="1. The servant is dependent on his Lord #1"
          description=" All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy."
          reference="Reference:"
          referenceTitle="Surah Al-Fatir 35:15"
        />
        <CustomMainCategori
          image={duacard}
          title="2. Conditions for Dua to be successful"
          description=" All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy."
          reference="Reference:"
          referenceTitle="Surah Al-Fatir 35:15"
        />
        <CustomMainCategori
          image={duacard}
          title="3. The servant is dependent on his Lord #3"
          description=" All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy."
          reference="Reference:"
          referenceTitle="Surah Al-Fatir 35:15"
        />
        <CustomMainCategori
          image={duacard}
          title="3. The servant is dependent on his Lord #3"
          description=" All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy."
          reference="Reference:"
          referenceTitle="Surah Al-Fatir 35:15"
        />
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default MainSide;
