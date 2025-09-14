import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
import pool from './db.js';

const file = fileURLToPath(import.meta.url);
const __dirname = dirname(file);

dotenv.config({path: join(__dirname , '../.env')});

const transport = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_PASS,
        pass: process.env.PASSWORD
    }
})



export const createaccount = async(req , res)=>{
        const {email,password,username} = req.body;

        const consultation = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email])

        if(consultation.rowCount === 0){
            res.sendStatus(200)
            const token = jwt.sign({email,password,username} , 'segredo' , {expiresIn : '5min'} )
            const url = `http://localhost:4000/confirmemail?token=${token}`

            const emaildata = {
                 from: 'johnyeryckdev@gmail.com',
                 to : email,
                 subject: 'Confirme seu email',
                 html: 
                 `<div style="background-color: black; height : 360px">
                    <h1 style="color: white">Para continuar a criação de sua conta Clique no link para confirmar seu e-mail: </h1>
                    <button style="background-color: blueviolet;"><a href="${url}" style="text-decoration : none; color : white">Confirmar</a></button>
                  </div>`
                          
            }

            transport.sendMail(emaildata , (error, info)=>{
              if (error) return res.status(500).send(error);
              return res.send('Email de confirmação enviado')
            })
    }else{
       return res.sendStatus(400)
    }
    
    
}

const confirmEmail = async(req , res)=>{
    let id = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    try{
        await pool.query("INSERT INTO usuarios (email,password,username,id) VALUES($1,$2,$3,$4) RETURNING*" , [email,password,username,id])
        res.status(201)
    }catch(err){
        console.log(err)
    }

}
