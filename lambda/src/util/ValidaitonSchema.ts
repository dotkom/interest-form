import * as Yup from 'yup';
import { FormData } from '../../../src/models/Form/Form';

export const ValidationSchema = Yup.object<FormData>().shape({
  companyName: Yup.string().required('Dette feltet er påkrevd'),
  contactName: Yup.string().required('Dette feltet er påkrevd'),
  contactMail: Yup.string()
    .required('Dette feltet er påkrevd')
    .email('Ugyldig format på mailen'),
  phone: Yup.string()
    .required('Dette feltet er påkrevd')
    .matches(/([\+]{0,1}[0-9])/, 'Telefonnummer er ugyldig og bør kun inneholde tall og maks 1 "+"')
    .min(8, 'Telefonnummer for kort!')
    .max(11, 'Telefonnummeret er for langt!'),
  comments: Yup.string().required('Dette feltet er påkrevd'),
});
