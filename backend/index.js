import express from "express";
import pool from "./db.js";
import { createaccount } from "./controlers/createaccount.js";
import jwt from 'jsonwebtoken'
import { login } from "./controlers/login.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors({
  origin : "http://localhost:3000",
  methods : ["GET","POST"],
}))

// Rota Principal

app.get("/", async(req, res) => {
  let users =  await pool.query("SELECT username ,id FROM usuarios")
  res.status(200).send(users.rows.map((u)=> `<li>${u.id}</li>`).join(""));
});

// Rota de criação da conta
app.get("/criarconta", (req, res) => {
  res.status(200).send("criar conta");
});

app.post("/criarconta", createaccount);

// Rota de Login

app.post("/login", login);

app.get("/login", (req, res) => {
  res.status(200).send("login");
});

// CONFIRM EMAIL
app.get("/confirmemail" , async (req ,res)=>{
    let id = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    const {token} = req.query;
    const decode = jwt.decode(token , 'segredo')
    const { password , email , username } = decode;
    await pool.query("INSERT INTO usuarios (email , password , username , id) VALUES($1,$2,$3,$4)", [email ,password,username,id])


})

// CHAT
let menssagem = []

app.post("/chat/:id" , (req ,res)=>{
   const {mesage} = req.body
   res.send(mesage)
})
app.get("/chat/:id" , (req,res)=>{
  const id = req.params.id
  
  res.send(menssagem)
  
})


export default app;
