"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Timer from "../components/useTimer";
import values from "../interfaces";
export default function FormCadastro() {
  const [timer, setTimer] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<values>();

  const onSubmit = async (data: values) => {
    const dados = { email: data.email, password: data.password };
    const query = await fetch("http://localhost:4000/criarconta", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (query.status === 200) {
      setTimer(true);
      setEmail(dados.email);
    } else {
      console.log("error ao criar conta");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-1/4 h-100 mx-auto mt-20 shadow-sm  shadow-[#00F5D4] p-0.5 rounded-2xl bg-[#0D0E1C]"
    >
      {!timer && (
        <main className="w-[70%] mt-10 ml-auto mr-auto flex flex-col">
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Email é obrigatório",
              minLength: {
                value: 6,
                message: "Email deve ter no mínimo 6 caracteres",
              },
            })}
            className="p-2 bg-[#1e1f30] rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <input
            id="password"
            type="password"
            placeholder="senha"
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
            className="p-2 rounded-lg bg-[#1e1f30] mt-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <div className="flex items-center p-0.5 mt-2">
            <input
              type="checkbox"
              id="lembrar"
              name="checkbox"
              className="accent-[#00F5D4]"
            />
            <label htmlFor="lembrar" className="ml-1 text-white">
              Lembrar de mim
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#00F5D4] text-black p-2 rounded-lg w-1/2 ml-[15%] mr-auto mt-2 hover:bg-[#09a893] transition-colors"
            disabled={timer}
          >
            Criar conta
          </button>
        </main>
      )}

      {timer && (
        <div className="flex flex-col border text-center rounded mt-10 p-10">
          <p>Email de confirmação enviado para {email}</p>
          <button className="border w-[50%] ml-auto mr-auto text-gray-500 rounded mt-10">
            <p>Reenviar em</p>
            <Timer />
          </button>
        </div>
      )}
    </form>
  );
}
