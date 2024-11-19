import { FaHandPaper } from "react-icons/fa";
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
        <div>all icon</div>

        {/* last section  */}
        <div>han icon</div>
      </aside>
    </div>
  );
};

export default Sidebar;
