import DuasPage from "@/components/DuasPage";
import LeftSide from "@/components/LeftSide";
import MainSide from "@/components/MainSide";
import Container from "@/components/sherad/Container";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {

  return (
  <div className="bg-[#EBEEF2]">
     <Container className='pt-10'>
     <div className="flex  justify-center ">
     <div className="flex gap-10">
     <Sidebar />
     <DuasPage/>
     </div>
      <MainSide />
      <LeftSide />
    </div>
   </Container>
  </div>
  );
}
