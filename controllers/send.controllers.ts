import { NextFunction, Request, Response } from "express";

import Mailer from '../mail'
import { SentMessageInfo } from "nodemailer";

export const sendController = async (req: Request, res: Response, next: NextFunction) => {
    const {email} = req.body;
    try {
        Mailer.SEND(req.body, (info: SentMessageInfo) => {
            res.status(200).json({
                success: true,
                data: info,
                message: "email sent successfully"
            });
        })
    } catch (error) {
        next(error);
    }
}