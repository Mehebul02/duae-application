import { FaHandHoldingHeart, FaHandPaper, FaHome  } from "react-icons/fa";
import { GiFlowers } from "react-icons/gi";
import { TiLightbulb } from "react-icons/ti";
import LeftSideIcon from "./sherad/LeftSideIcon";
import { CiMedicalClipboard } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="bg-white  p-8 rounded-md">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between">
        {/* 1st div  */}
        <div className="flex  bg-primary-color p-4 rounded-lg cursor-pointer">
          <FaHandPaper className="text-white" />
          <FaHandPaper className="text-white" />
        </div>

        {/* middle section  */}
        <div className="mt-10 ">
            
         <LeftSideIcon ICON={<FaHome/>}/>
         <LeftSideIcon ICON={<GiFlowers/>}/>
         <LeftSideIcon ICON={<TiLightbulb/>}/>
         <LeftSideIcon ICON={<FaRegBookmark  />}/>
         <LeftSideIcon ICON={<CiMedicalClipboard />}/>
         <LeftSideIcon ICON={<FaComments />}/>
         <LeftSideIcon ICON={<GiOpenBook />}/>
        </div>

        {/* last section  */}
        <div className="mt-10">

        <div className="flex justify-center bg-primary-color p-4 rounded-lg cursor-pointer">
          <FaHandHoldingHeart className="text-white" />
         
        </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
