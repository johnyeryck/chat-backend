import { Router } from "express";
import { createaccount } from "../controlers/createaccount.js";
import { login } from "../controlers/login.js";
import { ConfirmEmail } from "../controlers/confirmEmail.js";
import { Getdata } from "../controlers/getData.js";

const router = Router();
router.post("/criarconta", createaccount);
router.post("/login", login);
router.get("/confirmemail", ConfirmEmail);
router.get("/user/:token", Getdata);

export default router;
