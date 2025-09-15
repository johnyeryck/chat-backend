import nodemailer from "nodemailer"
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'
const file = fileURLToPath(import.meta.url);
const __dirname = dirname(file);
dotenv.config({ path: join(__dirname, "../.env") });

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "johnyeryckdev@gmail.com",
    pass: process.env.PASSWORD,
  },
});