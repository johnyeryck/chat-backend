import Image from "next/image";
import user from "@public/homersimpsons.webp";
import { useState } from "react";
export default function Navbar() {
const [active , setActive] = useState<boolean>(false)
  return (
    <nav className=" ml-auto h-20 flex shadow-lg overflow-hidden shadow-gray-800">
      <div className="text-white  w-6  ml-4 mt-7 flex flex-col gap-1.5" onClick={()=> setActive(true)}>
        <span className="w-full h-0.5 bg-[#00F5D4]"></span>
        <span className="w-full h-0.5 bg-[#00F5D4]"></span>
        <span className="w-full h-0.5 bg-[#00F5D4]"></span>
      </div>
      {
        active && (
          <div className="h-full ease-linear rounded-lg  w-1/6 border transition-normal bg-[#0D0E1C] absolute transition-all containerAnimation"></div>
        )
      }


      <div className=" w-1/6 ml-auto flex mt-4">
        <p className="text-center ml-auto mr-2 mt-2">Username</p>
        <div className="rounded-full size-10  mb-2  mr-2  overflow-hidden cursor-pointer">
          <Image src={user} alt="Foto de perfil" className="" />
        </div>
      </div>
    </nav>
  );
}
