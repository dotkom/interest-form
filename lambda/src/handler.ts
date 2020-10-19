import { Handler } from 'aws-lambda';
import { INVALID_DATA, MAIL_SENT_SUCCESS, Response } from './constants';
import { mailer } from './mailer';

export const handler: Handler = async (event, context, callback): Promise<Response> => {
  if (!event.body) {
    return INVALID_DATA;
  }
  const mailRes = await mailer(event.body);
  if (mailRes.statusCode !== 200) {
    return mailRes;
  }

  return MAIL_SENT_SUCCESS;
};
