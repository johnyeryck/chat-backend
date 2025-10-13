"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("tokenAcess");
    console.log(token);
    const req = async () => {
      const res = await fetch(`http://localhost:4000/user/${token}`, {
        method: "GET",
        credentials: "include",
      });
      console.log(await res.json());
      if (!res.ok) {
        throw new Error("Falha na requisição");
      }
    };
    req();
  });

  return (
    <header className="bg-[#0e0f19]">
      <Navbar />
      <main className="flex justify-evenly w-[80%] ml-auto mr-auto">
        <div className="shadow shadow-gray-800 w-1/3  mt-20 h-120 rounded-lg  bg-[#0D0E1C]"></div>

        <div className=" shadow shadow-gray-800 w-1/3  mt-20 h-120 rounded-lg bg-[#0D0E1C]">
          <div className=" flex justify-evenly ">
            <input
              type="text"
              className="border border-[#1FFFE1]  rounded-2xl pl-3"
              placeholder="Envie Uma Mensagem"
            />
            <button type="submit" className="cursor-pointer">
              <Image src="/mandar.png" alt="enviar" width={20} height={20} />
            </button>
          </div>
        </div>
      </main>
    </header>
  );
}
