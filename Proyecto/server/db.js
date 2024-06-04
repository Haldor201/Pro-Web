import mongoose from "mongoose";

export const conectar=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/TallerWeb');   
        console.log("Conectado");
    } catch (error) {
        console.log(error);
    }
}