import express from "express";
import { createaccount } from "./controlers/createaccount.js";
import { login } from "./controlers/login.js";
import cors from 'cors'
import CookieParse from 'cookie-parser'
import { ConfirmEmail } from "./controlers/confirmEmail.js";

const app = express();
app.use(express.json());
app.use(CookieParse());
// CORS CONFIG
app.use(cors({
  origin : "http://localhost:3000",
  methods : ["GET","POST"],
  credentials : true
}))


// Rota Principal
app.get("/", (req, res) => {
  const auth = req.cookies.secretToken
  console.log(auth)
  if(!auth) return res.sendStatus(401)
  res.status(200)
});

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
