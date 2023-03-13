import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default transporter;