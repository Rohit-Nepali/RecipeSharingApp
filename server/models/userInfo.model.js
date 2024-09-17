import mongoose, { Schema } from "mongoose";

const userInfoSchema = new mongoose.Schema({
    baseInfo: {
        firstName: { type: String, required: true },
        LastName: { type: String, required: true },
        age: { type: Number, required: true },
        imageUrl : {type:String,required:true}
    },
    professionalInfo: {
        email: { type: String, required: true },
        contact: { type: Number, required: true },
        address: { type: String, },
    },
    exprienceInfo: {
        education: { type: String, },
        status: { type: String,required:true }
    },
    connectInfo: {
        links: [
            { url: { type: String } }
        ]
    }
});

export const profileInfo = mongoose.model("profileInfo",userInfoSchema);