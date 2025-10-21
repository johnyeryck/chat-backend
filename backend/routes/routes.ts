import { Router } from "express";
import { createaccount } from "../controllers/createaccount.js";
import { login } from "../controllers/login.js";
import { ConfirmEmail } from "../controllers/confirmEmail.js";
import { Getdata } from "../controllers/getData.js";

const router = Router();
router.post("/criarconta", createaccount);
router.post("/login", login);
router.get("/confirmemail", ConfirmEmail);
router.get("/user", Getdata);

export default router;
