"use client";
import Navbar from "./components/navbar";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const consultatio = async () => {
      const res = await fetch("http://localhost:4000", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Falha na requisição");
      }
    };
    consultatio();
  });

  return (
    <>
      <Navbar />
      <div className="border w-[90%] ml-auto mr-auto mt-20 h-120"></div>
      </>
  );
}
