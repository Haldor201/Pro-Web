import {Router} from "express";
import {login} from "./controllers/auth.controller.js"
router=Router();

router.post("/newUser",login);