import { APIGatewayEvent } from 'aws-lambda';
import { INVALID_DATA, MAIL_SENT_SUCCESS, SERVER_ERROR } from './constants';
import nodemailer from 'nodemailer';
import { getFormattedData, confirmationMail } from './util/MailFormatters';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { SENDER_EMAIL } from './constants';
import { ValidationSchema } from './util/ValidaitonSchema';
import { FormData } from '../../src/models/Form/Form';
import { ValidationError } from 'yup';

interface Response {
  statusCode: number;
  body: string;
}

export const handler = async (event: APIGatewayEvent): Promise<Response> => {
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
      serviceClient: process.env.CLIENT_ID,
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  console.log('CLIENT ID: ' + process.env.CLIENT_ID);
  console.log('PRIVATE KEY:' + process.env.PRIVATE_KEY);

  const sendMail = async (mailOptions: MailOptions) => {
    await transporter.sendMail(mailOptions);
  };

  // Sends mail to bedkom
  try {
    await transporter.verify().then((res) => console.log(res));
    console.log('HEi4');
    await sendMail({
      from: SENDER_EMAIL,
      to: 'anhkhav@gmail.com',
      subject: `[Interesse] ${data.companyName}`,
      html: getFormattedData(data),
    });
    console.log('HEI5');

    // Sends confirmation mail to the contact person
    await sendMail({
      from: SENDER_EMAIL,
      to: data.contactMail,
      subject: `Deres interesse har blitt meldt`,
      html: confirmationMail(data),
    });
    console.log('HEI6');
    return MAIL_SENT_SUCCESS;
  } catch (err) {
    return SERVER_ERROR(err);
  }
};
