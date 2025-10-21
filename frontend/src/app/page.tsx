"use client";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Chat from "./components/chat";
import { MyContext } from "./Context";
export default function Home() {
  interface DataInterface {
    users: string[];
    userLoged: string;
  }

  const [Data, setData] = useState<DataInterface | undefined>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const req = async () => {
      const res = await fetch(`http://localhost:4000/user?token=${token}`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Falha na requisição");
      }

      const response: DataInterface = await res.json();
      setData(response);
    };
    req();
  }, []);

  return (
    <header className="bg-[#0e0f19]">
      <MyContext.Provider value={Data}>
        <Navbar Username={Data?.userLoged} />
        <main className="flex justify-evenly w-[80%] ml-auto mr-auto">
          <Chat InputHidden />
          <Chat />
        </main>
      </MyContext.Provider>
    </header>
  );
}
