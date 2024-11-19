import LeftSide from "@/components/LeftSide";
import MainSide from "@/components/MainSide";
import Container from "@/components/sherad/Container";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-[#EBEEF2] h-screen">
     <Container className='pt-14'>
     <div className="flex  justify-between ">
      <Sidebar />
      <MainSide />
      <LeftSide />
    </div>
   </Container>
  </div>
  );
}
