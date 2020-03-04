import nodemailer from 'nodemailer';
import { FormData } from 'models/Form/Form';
import { getFormattedData, confirmationMail } from '../util/MailFormatters';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { getAuthFile } from './authFile';
import { SENDER_EMAIL } from './constants';

export const handleMail = async (data: FormData): Promise<boolean> => {
  const authFile = await getAuthFile();
  if (!authFile) {
    return false;
  }
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL,
      serviceClient: authFile.client_id,
      privateKey: authFile.private_key,
    },
  });

  const sendMail = async (mailOptions: MailOptions) => {
    await transporter.sendMail(mailOptions).catch(() => {
      return false;
    });
  };

  // Sends mail to bedkom
  try {
    await transporter.verify().then((res) => console.log(res));
    await sendMail({
      from: SENDER_EMAIL,
      to: 'anhkhav@gmail.com',
      subject: `[Interesse] ${data.companyName}`,
      html: getFormattedData(data),
    });

    // Sends mail to the contact person
    await sendMail({
      from: SENDER_EMAIL,
      to: data.contactMail,
      subject: `Deres interesse har blitt meldt`,
      html: confirmationMail(data),
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
