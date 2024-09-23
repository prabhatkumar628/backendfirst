import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({path: "./env"})
const port = process.env.PORT|| 3000

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error", error)
        throw error
    })
    app.listen(port, ()=>{
        console.log(`server is running on port: http://localhost:${port}`)
    })
    
})
.catch((err)=>{
    console.log("MONGODB connection failed !! ", err)
})








// import express from "express"

// const app = express()

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Eror",  error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`server in running on port: ${process.env.PORT}`)
             
//         })

//     }
//     catch (error) {
//         console.log("ERROR", error)
//         throw err
//     }

// })()



















// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"
// const app = express()

// const dotenv = require("dotenv")
// dotenv.config()



//     ; (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error)=>{
//                 console.log("Error",error)
//                 throw error
//             })
//             app.listen(process.env.PORT, ()=>{
//                 console.log(`app is listening on port ${process.env.PORT}`)
//             })
//         }
//         catch (error) {
//             console.log("Error", error)
//             throw error
//         }

//     })()