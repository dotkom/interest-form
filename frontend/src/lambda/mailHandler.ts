import nodemailer from 'nodemailer';
import { FormData } from 'models/Form/Form';
import { getFormattedText, confirmationMail } from '../util/MailFormatters';
import dotenv from 'dotenv';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

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
  const sendMail = async (mailOptions: MailOptions) => {
    await transporter.sendMail(mailOptions).catch(() => {
      return false;
    });
  };

  // Sends mail to bedkom
  sendMail({
    from: process.env.USER_MAIL,
    to: process.env.RECIPIENT,
    subject: `[Interesse] ${data.companyName}`,
    html: getFormattedText(data),
  });

  // Sends mail to the contact person
  sendMail({
    from: process.env.USER_MAIL,
    to: data.contactMail,
    subject: `Deres interesse har blitt meldt`,
    html: confirmationMail(data),
  });
  return true;
};
