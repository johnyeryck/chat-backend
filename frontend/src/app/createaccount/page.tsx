'use client'
import React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
export default function FormCadastro() {

  const createaccount = z.object({
    email : z.string(),
    password : z.string(),
    })
  
  type accountSchema = z.infer<typeof createaccount >   

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver : zodResolver(createaccount)});

  const onSubmit = async(data : accountSchema) => {
    console.log(data)
    const dados = {email : data.email , password : data.password , }
      const query = await fetch("http://localhost:4000/criarconta", {
        method : "POST",
        body : JSON.stringify(dados),
        headers :{

          "Content-Type" : "application/json"
        } 
      })

      if(query.status === 200){
        alert(`Email de confirmação enviado para ${dados.email}`)
      }
      else{
        console.log("error ao criar conta")
      }
      
      
  };
console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm mx-auto   mt-20 bg-gradient-to-r from-green-400 to-green-300 p-0.5 rounded-2xl  ">
      <div className="bg-black w-[99%] ml-auto mr-auto h-70 flex flex-col rounded-2xl static ">

      <input
        type="email"
        placeholder="email"
        {...register("email", { required: "Login é obrigatório" , minLength :  6 } )}
        className="border p-2 rounded"
        
        />
      {errors.email && <p className="text-red-500 text-sm">Esse campo é obrigatório</p>}

      <input
        type="password"
        placeholder="Senha"
        {...register("password", { required: "Senha é obrigatória" })}
        className="border p-2 rounded"
        />
      {errors.password && <p className="text-red-500 text-sm">Esse campo é obrigatório</p>}

      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Criar conta
      </button>
        </div>
    </form>
  );
}
