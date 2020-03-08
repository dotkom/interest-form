import { Handler } from 'aws-lambda';
import {
  Response,
  INVALID_DATA,
  MAIL_SENT_SUCCESS,
  SERVER_ERROR,
  INVALID_AUTHENTICATION,
  RECIEVER,
  SENDER_EMAIL,
} from './constants';
import nodemailer from 'nodemailer';
import { getFormattedData } from './util/MailFormatters';
import { ValidationSchema } from './util/ValidaitonSchema';
import { FormData } from '../../src/models/Form/Form';
import { ValidationError } from 'yup';
import { getAuthFile } from './util/authFile';

export const handler: Handler = async (event, context, callback): Promise<Response> => {
  const authFile = await getAuthFile();
  if (!authFile) {
    return INVALID_AUTHENTICATION;
  }

  if (!event.body) {
    return INVALID_DATA;
  }
  const data: FormData = await JSON.parse(event.body);
  // Validates incomming data
  await ValidationSchema.validate(data).catch((err: ValidationError) => {
    return {
      statusCode: 422,
      body: err,
    };
  });
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

  try {
    await transporter.verify().catch((err) => console.log(err));
    // Sends mail to bedkom
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: RECIEVER,
      subject: `[Interesse] ${data.companyName}`,
      html: getFormattedData(data, false),
    });

    // Sends confirmation mail to the contact person
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: data.contactMail,
      subject: `Deres interesse har blitt meldt`,
      html: getFormattedData(data, true),
    });
    return MAIL_SENT_SUCCESS;
  } catch (err) {
    return SERVER_ERROR(err);
  }
};
