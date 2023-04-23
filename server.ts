import ErrorHandler from './middlewares/errorHandler';
import SEND_ROUTE from './routes/send.routes';
import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
dotenv.config()
const PORT = process.env.PORT || 8000
const APP = express()
APP.use(express.json())
APP.use(cors({credentials: true, origin:true}));
APP.use("/api/send", SEND_ROUTE)

APP.use(ErrorHandler)

APP.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})