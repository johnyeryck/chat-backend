
import Image from "next/image";
import user from '@public/do-utilizador.png'

export default function Navbar (){
    return(
          <nav className="border  ml-auto h-20">
         <div className=" w-1/6 ml-auto flex mt-4">
            <p className="text-center ml-auto mr-2 mt-2">Username</p>
            <div className="rounded-full size-10 border mb-2  mr-2 border-green-400">
              <Image src={user} alt="Foto de perfil" className="" />
            </div>
          </div>
      </nav>
    )
}