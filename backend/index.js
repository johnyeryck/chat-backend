import express from 'express';
import pool from './db.js';

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
app.post("/criarconta", async(req , res)=>{
    const {email,password,username} = req.body
    let id = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

    try{
        await pool.query("INSERT INTO usuarios (email,password,username,id) VALUES($1,$2,$3,$4) RETURNING*" , [email,password,username,id])
    }catch(err){
        console.log(err)
    }

})

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