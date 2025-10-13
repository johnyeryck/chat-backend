import jwt from "jsonwebtoken";
const email = "johnybombado@gmail.com";
const senha = "12345";

console.log(jwt.sign({ email, senha }, "secret"));
