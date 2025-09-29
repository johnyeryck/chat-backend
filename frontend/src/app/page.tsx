'use client'  
import Image from "next/image";
import user from '../../public/do-utilizador.png'
import { useEffect } from "react";
export default function Home() {

 useEffect(()=>{
    const consultatio = async ()=>{
      const res = await fetch("http://localhost:4000", {
        method : "GET",
        credentials : "include"
      })
      if(!res.ok){
        throw new Error("Falha na requisição")
      }
    }
    consultatio()
  })



  return (
    <div className="">
        <article className="border  ml-auto h-20">
          <div className="rounded-full size-10  pt-3 ml-auto mr-2">
            <Image  src={user} alt="Foto de perfil"/>
          </div>
        </article>

        <div className="border w-[90%] ml-auto mr-auto mt-20 h-120"></div>
    </div>
  );
}
