export interface MailerData {
    receiver_name?: string;
    receiver_email: string;
    sender_identity?: string;
    sender_email?: string;
    subject: string;
    message: string;
    htmlText?: string;
    noreply?: boolean;
  }