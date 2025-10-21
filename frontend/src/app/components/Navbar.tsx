import Image from "next/image";
import user from "@public/homersimpsons.webp";
import { useState } from "react";
import { useContext } from "react";
interface username {
  Username?: string;
}
export default function Navbar({ Username }: username) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="w-full ml-auto  h-20 flex shadow-lg  shadow-gray-800 ">
      <header className=" flex h-1/2 w-full mt-auto mb-auto">
        <div
          className="text-white  w-6  ml-4 pt-2 flex flex-col gap-1.5"
          onClick={() => setActive(true)}
        >
          <span className="w-full h-0.5 bg-[#00F5D4]"></span>
          <span className="w-full h-0.5 bg-[#00F5D4]"></span>
          <span className="w-full h-0.5 bg-[#00F5D4]"></span>
        </div>

        {active && (
          <div className="h-full ease-linear rounded-lg  w-1/6 border transition-normal bg-[#0D0E1C] absolute transition-all containerAnimation"></div>
        )}
        <img src="logo.png" alt="" className=" ml-6 " />

        <input
          type="search"
          name=""
          id=""
          className="w-1/3 h-9 rounded-2xl pl-3 bg-[#1e1f30] ml-auto  "
        />

        <div className="w-auto ml-auto flex pr-2">
          <p className="text-center ml-auto mr-2 mt-2">{Username}</p>
          <div className="rounded-full size-10   overflow-hidden cursor-pointer">
            <Image src={user} alt="Foto de perfil" className="" />
          </div>
        </div>
      </header>
    </nav>
  );
}
