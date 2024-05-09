import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"

// import helmet from "helmet"
import { dbConnection } from "./utils/config.js"

import hotelRouter from "./routes/hotels.js"


dotenv.config()

//MongoDB connection function
dbConnection()
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!");
})


const app = express()

//middleware
// Enable CORS for all routes
app.use(cors());
app.use(express.json())
// app.use(helmet())
app.use(morgan('dev'))

app.use("/api/hotels",hotelRouter)
// app.use("/api/auth",authRouter)
// app.use("/api/users",userRouter)

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Some thing went wrong"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

