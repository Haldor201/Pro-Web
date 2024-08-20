import mongoose from "mongoose";

export const conectar=async ()=>{
    try {
        await mongoose.connect('');   
        console.log("Conectado");
    } catch (error) {
        console.log(error);
    }
}
