import express from 'express';
import pool from './db.js';
import { createaccount } from './createaccount.js';

const app = express()
app.use(express.json())


// Rota Principal
app.get("/" ,(req, res)=>{
    res.status(200).send("Rodando")
})


// Rota de criação da conta
app.get("/criarconta" ,(req, res)=>{
    res.status(200).send("criar conta")
})

app.post("/criarconta" , createaccount)


// Rota de Login
app.post("/login" , async (req, res)=>{
    const { email , password } = req.body;
    console.log(email)
    try{
      const consultation =  await pool.query("SELECT * FROM usuarios WHERE email = $1 AND password = $2",[email,password])
      if(consultation.rows.length > 0 ) res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
   
})
app.get("/login" ,(req, res)=>{
    res.status(200).send("login")
})

export default app