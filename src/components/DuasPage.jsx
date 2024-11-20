import { dui, zikirer } from "@/assets/images";
import Image from "next/image";
import React from "react";
import CustomDuaCategories from "./dua-categories/CustomDuaCategories";

const DuasPage = () => {

  return (
    <div className="">
      <h1 className="text-xl text-black font-inter mb-2">Duas Page</h1>
      <div className="bg-white border  rounded-lg w-80">
        <div className="flex justify-center items-center bg-primary-color w-80 h-14 rounded-t-md">
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
            <input
              type="text"
              className="grow"
              placeholder="Search Categories"
            />
          </label>
        </div>
        {/* 2nd categories  */}
        <CustomDuaCategories
          image={dui}
          category="Dua's Importance"
          subcategory="Subcategory: 7"
          count={21}
          countTitle="Duas"
          categoryTitles={[
            "The servant is dependent on his Lord",
            "The most important thing to ask Allah for",
            "Ask for paradise & protection from fire",
            "Dua to remain steadfast on the religion",
            "Dua of good outcome in all deeds",
            "Seeking whatever good Allah can bestow",
            "Shelter from horror, misery, evil consequences and rejoicing of the enemy"
          ]}
    />
        {/* 2nd categories  */}
        <CustomDuaCategories
          image={zikirer}
          category="Dua's Excellence"
          subcategory="Subcategory: 1"
          count={15}
          countTitle="Duas"
          categoryTitles={[
            "Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer"
          
          ]}
    />
      </div>
    </div>
  );
};

export default DuasPage;
