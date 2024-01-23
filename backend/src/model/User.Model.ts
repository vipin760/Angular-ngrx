import { Schema, model } from "mongoose";
import { IUser } from "../share/interface/User.Interface";



export const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

export const UserModel = model<IUser>("SampleUser",UserSchema);
