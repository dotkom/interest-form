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
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Phone number is invalid, please try the format of +xx xxx xx xxx'
    )
    .min(8, 'Too short!'),
  comments: Yup.string().required('Required'),
});
