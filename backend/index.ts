import express from "express";
import { createaccount } from "./controlers/createaccount.js";
import { login } from "./controlers/login.js";
import cors from 'cors'
import { ConfirmEmail } from "./controlers/confirmEmail.js";
import pool from "./db.js";

const app = express();
app.use(express.json());
// CORS CONFIG
app.use(cors({
  origin : "http://localhost:3000",
  methods : ["GET","POST"],
  credentials : true
}))


// Rota Principal
app.get("/", async(req, res) => {
  const users= await pool.query("SELECT id FROM usuarios")

  res.status(200).send(JSON.stringify(users.rows))
});

app.post("/" , async(req,res)=>{
 res.sendStatus(200)
})

// Rota de criação da conta
app.get("/criarconta", (req, res) => {
  res.status(200).send("criar conta");
});

app.post("/criarconta", createaccount);
//


// Rota de Login
app.post("/login", login);

app.get("/login", (req, res) => {
  res.status(200).send("login");
});

// CONFIRM EMAIL
app.get("/confirmemail" , ConfirmEmail)

// CHAT



export default app;
