import { Request, Response, NextFunction } from 'express';


const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware Error Handling");
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const stack = process.env.NODE_ENV === 'production' ? '🥞' : err.stack;
    res.status(status).json({
        success: false,
        status,
        message,
        stack
    })
}

export default ErrorHandler;