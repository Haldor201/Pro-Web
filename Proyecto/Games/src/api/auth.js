//usamos axios
import axios from "./axios.js"

//                           recibe un usuario y lo envia al post
export const registerRequest=user => axios.post(`/register`,user)
export const loginRequest=user=>axios.post(`/login`,user)
export const verifyToken=()=>axios.get("/verify")