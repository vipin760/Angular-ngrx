import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnect} from './config/config';
dotenv.config()

import user_router from './router/User.Router'

const app = express()
dbConnect()
app.use(cors({
  origin:["http://localhost:4200"]
}))
app.use(express.json())
app.use("/api/user",user_router)


const PORT = 3000;
app.use(express.json())


app.listen(PORT,()=>{
  console.log(`running port:${PORT}`);
})