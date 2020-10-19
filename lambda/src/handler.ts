import { Handler } from 'aws-lambda';
import { INVALID_DATA, MAIL_SENT_SUCCESS, Response } from './constants';
import { mailer } from './mailer';
import { FormData } from '../../common/FormData';

export const handler: Handler = async (event, context, callback): Promise<Response> => {
  if (!event.body) {
    return INVALID_DATA;
  }
  const data: FormData = await JSON.parse(event.body);
  const mailRes = await mailer(data);

  if (mailRes.statusCode !== 200) {
    return mailRes;
  }

  return MAIL_SENT_SUCCESS;
};
