import * as Yup from 'yup';
import { FormData } from 'models/Form/Form';

export const ValidationSchema = Yup.object<FormData>().shape({
  companyName: Yup.string().required('Required'),
  contactName: Yup.string().required('Required'),
  contactMail: Yup.string()
    .required('Required')
    .email('Invalid mail'),
  phone: Yup.string()
    .required('Required')
    .matches(/^[\d\+\s]+/, 'A phone number should only contain digits!')
    .min(8, 'Too short!')
    .max(10, 'Too long!'),
});
