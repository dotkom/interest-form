import express, { Request, Response } from 'express';
import { handleMail } from './mailHandler';
import { FormData } from 'models/Form/Form';
import bodyParser from 'body-parser';
import { ValidationSchema } from '../util/ValidaitonSchema';
import { ValidationError } from 'yup';

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.json({ limit: '5mb' }));

app.post('/sendmail', async (req: Request, res: Response) => {
  // Validates that shit
  await ValidationSchema.validate(req.body).catch((err: ValidationError) => {
    res.status(422).send(err);
  });
  const response = await handleMail(req.body as FormData);
  if (!response) {
    res.status(500).send('Failed at sending mail');
  } else {
    res.status(200).send('Mail sent!');
  }
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
