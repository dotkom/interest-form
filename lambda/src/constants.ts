export const SENDER_EMAIL = process.env.SENDER || 'bedrift-interesse@online.ntnu.no';
export const RECIEVER = process.env.RECIEVER;

export interface Response {
  statusCode: number;
  body: string;
}

export const INVALID_DATA: Response = {
  statusCode: 400,
  body: 'Sent data is invalid',
};

export const SERVER_ERROR = (err: string): Response => {
  return {
    statusCode: 500,
    body: `Something went wrong on the server!\n${err}`,
  };
};

export const MAIL_SENT_SUCCESS: Response = {
  statusCode: 200,
  body: 'Mail sent!',
};

export const INVALID_AUTHENTICATION: Response = {
  statusCode: 403,
  body: 'Invalid authentication to mail account',
};
