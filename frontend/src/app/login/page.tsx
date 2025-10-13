"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LoadingSpinner from "../components/loadspinner";
import values from "../interfaces";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export default function LoginPage() {
  const [loading, setloading] = useState<boolean>(false);
  type logintype = z.infer<typeof schema>;
  const schema = z.object({
    email: z.email(),
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logintype>({ resolver: zodResolver(schema) });

  const onsubmit = async (e: values) => {
    setloading(true);
    const data = { email: e.email, password: e.password };
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setloading(false);
        // window.location.href = "http://localhost:3000";
        const token = await res.json();
        localStorage.setItem("tokenAcess", token.acesstoken);
        console.log(token.acesstoken);
      }
      if (res.status === 401) {
        setloading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen w-1/4 h-100 ml-auto mr-auto text-black">
      <div className="w-full max-w-md p-8 space-y-6 h-100 rounded-lg  bg-[#0D0E1C] shadow shadow-[#00F5D4]">
        <h1 className="text-2xl font-bold text-center text-white ">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <input
            type="email"
            id="email"
            required
            placeholder="email"
            className="mt-1 block w-full px-3 py-2 rounded-lg text-gray-500 bg-[#1e1f30] "
            {...register("email", {
              required: "Esse campo é obrigatorio",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          <input
            placeholder="senha"
            type="password"
            id="password"
            required
            className="mt-1 block w-full px-3 text-gray-500 py-2 bg-[#1e1f30] rounded-lg"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter no mínimo 6 caracteres",
              },
              maxLength: {
                value: 10,
                message: "Senha deve ter no máximo 10 caracteres",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="w-1/2 py-2 px-4  bg-[#00F5D4] rounded-lg hover:bg-[#09a893] transition-colors cursor-pointer"
          >
            {loading ? <LoadingSpinner /> : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
