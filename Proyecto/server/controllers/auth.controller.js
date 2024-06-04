import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import { token } from "../libs/jwt.js";
export const login=async (req,res)=>{
    //trayendo datos
  const { email, password } = req.body;

  try {
    //buscamos usuario por email
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });
    //devuelve false o true si son iguales las contraseñas encriptadas
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: ["Password Incorrect"] });

    //devuelve un token
    const tokenV = await token({ id: userFound._id });

    //a un cookie se le asigna el token
    res.cookie("token", tokenV);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: ["Error al intentar logearse"] });
  }
}

export const register=async (req,res)=>{
    //trayendo datos
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json({
      message: ["The email is already in use"],
    });
    //encriptamos la contraseña
    const hashPassword = await bcrypt.hash(password, 10);
    //asignando el usuario
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    //guardamos el usuario
    const newuser = await newUser.save();
    //devuelve un token
    const tokenV = await token({ id: newuser._id });
    //a un cookie se le asigna el token
    res.cookie("token", tokenV);

    res.json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el registro" });
  }
}