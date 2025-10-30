import Image from "next/image";
import user from "@public/homersimpsons.webp";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import { DataInterface } from "../Context";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const [results, setResults] = useState<{ username: string }[]>();
  const data = useContext(MyContext);
  const filterResults = (e: any) => {
    const value = e.target.value;
    const result = data![0].users.filter((item) => {
      if (value.length > 0) {
        const compare = item.username.includes(value);
        if (compare) return item.username;
      }
    });
    setResults(result);
  };
  console.log(results);
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

        <img src="logo.png" alt="" className=" ml-6 " />
        <article className="w-1/3 m-auto">
          <input
            type="search"
            name="filter"
            className="w-full h-9 rounded-2xl pl-3 bg-[#1e1f30] ml-auto focus:border-[#00F5D4]"
            list="suggestions"
            onChange={filterResults}
          />
          <div
            id="suggestions"
            className="bg-[#0D0E1C] opacity-90 cursor-pointer  rounded-lg mt-1 flex flex-col"
          >
            {results &&
              results.map((item, i) => (
                <Link
                  className="hover:bg-[#18192b] rounded-lg transition-colors  pl-4"
                  key={i}
                  href={`/user/${item.username}`}
                >
                  {item.username}
                </Link>
              ))}
          </div>
        </article>
        <div className="w-auto ml-auto flex pr-2">
          <p className="text-center ml-auto mr-2 mt-2">
            {data && data[0].userLoged}
          </p>
          <div className="rounded-full size-10   overflow-hidden cursor-pointer">
            <Image src={user} alt="Foto de perfil" className="" />
          </div>
        </div>
      </header>
    </nav>
  );
}
