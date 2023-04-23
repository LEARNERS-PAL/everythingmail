import { MailerData } from './../types';
import Templates from "./templates";
import transporter from "./transport";

const MailDriver = async (data: MailerData, callback: any) => {
  // destructure data
  const { receiver_email, sender_email, sender_identity, subject, noreply } = data;
  const mailOptions = {
    from: `${sender_identity || "NO-REPLY"} <${sender_email || "no-reply@everythingmailer.com"}>`,
    to: receiver_email,
    subject: subject,
    text: Templates.TEXT(data),
    html: Templates.TEXT(data),
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    callback(info);
  } catch (error: any) {
    throw new Error(error);
  }
};


// For testing the mailer function 
const DOSOME = async (email: string, callback: any) => {
  const mailOptions = {
    from: 'EVERYTHINGMAIL- TEST <no-reply@everythingmailer.com>',
    to: email,
    subject: "Do some Tester",
    text: "Just a Test dude!!!",
    html: "<h1>Just a Test dude!!!</h1>"
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    callback(info);
  } catch (error: any) {
    throw new Error(error);
  }
}


const Mailer = {
  SEND: MailDriver,
  TEST: DOSOME
}

export default Mailer;

