import { connect, ConnectOptions } from "mongoose"


export const dbConnect = () =>{
    try {
        connect(process.env.DATABASE_URL!,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        } as ConnectOptions).then(()=>{
            console.log("database connected");
        })
    } catch (error) {
        console.log(error)
    }
}