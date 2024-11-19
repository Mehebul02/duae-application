import { FaHandPaper, FaHome } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="bg-white h-screen p-8 rounded-md">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between">
        {/* 1st div  */}
        <div className="flex  bg-primary-color p-4 rounded-lg cursor-pointer">
          <FaHandPaper className="text-white" />
          <FaHandPaper className="text-white" />
        </div>

        {/* middle section  */}
        <div className="mt-20">
        <div className="flex justify-center items-center bg-[#EBEEF2] w-10 h-10 mx-auto rounded-full hover:bg-gray-300 transition-all cursor-pointer">
  <span className="text-xl text-gray-500 hover:text-gray-700 transition-all">
    <FaHome />
  </span>
</div>
        </div>

        {/* last section  */}
        <div>han icon</div>
      </aside>
    </div>
  );
};

export default Sidebar;
