import * as Yup from 'yup';
import { FormData } from '../components/Form';

export const ValidationSchema = Yup.object<FormData>().shape({
  companyName: Yup.string().required('Required'),
  contactName: Yup.string().required('Required'),
  companyMail: Yup.string()
    .required('Required')
    .email('Invalid mail'),
  phone: Yup.string()
    .required('Required')
    .matches(/([ +0-9]+)/, 'A phone number should only contain digits!')
    .min(8, 'Too short!')
    .max(10, 'Too long!'),
});
