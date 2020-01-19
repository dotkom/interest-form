import nodemailer from 'nodemailer';
import { FormData } from 'models/Form/Form';
import { getFormattedText } from '../util/FormatUtils';
import dotenv from 'dotenv';

dotenv.config();

export const handleMail = async (data: FormData): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const info = await transporter
    .sendMail({
      from: process.env.USER_MAIL,
      to: process.env.RECIPIENT,
      subject: `[Interesse] ${data.companyName}`,
      html: getFormattedText(data),
    })
    .catch(() => {
      return false;
    });
  console.log('Message sent: ' + info.messageId);

  return true;
};
