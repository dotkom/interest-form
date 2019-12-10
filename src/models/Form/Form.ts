import { Semester } from '../Semester';

export interface FormData {
  companyName: string;
  contactName: string;
  contactMail: string;
  phone: string;
  semesters?: Semester[];
  interests: string[];
  comments: string;
}
