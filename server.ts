import express, { Request, Response } from 'express';

const APP = express()


APP.listen(8000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${8000}`)
})