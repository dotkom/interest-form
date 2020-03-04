export const SENDER_EMAIL = 'bedrift-interesse@online.ntnu.no';
export const RECEIEVER = 'anhkhav@gmail.com';

interface Response {
  statusCode: number;
  body: string;
}

export const INVALID_DATA = {
  statusCode: 400,
  body: 'Sent data is invalid',
};

export const SERVER_ERROR = (err: string) => {
  return {
    statusCode: 500,
    body: `Something went wrong on the server!\n${err}`,
  };
};

export const MAIL_SENT_SUCCESS = {
  statusCode: 200,
  body: 'Mail sent!',
};
