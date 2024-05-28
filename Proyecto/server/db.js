import mongoose from "mongoose";

export const conectar=async ()=>{
    try {
        const conect=await mongoose.connect('');   
        console.log(conect);
    } catch (error) {
        console.log(error);
    }
}
