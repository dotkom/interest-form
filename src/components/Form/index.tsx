import { Formik } from 'formik';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { colors, media } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';
import { FormData } from 'models/Form/Form';
import { Header } from 'components/Header';
import SubmitArea from './Areas/SubmitArea';
import InformationArea from './Areas/InfromationArea';
import CompanyArea from './Areas/CompanyArea';
import CheckboxArea from './Areas/CheckboxArea';
import CommentsArea from './Areas/CommentsArea';
import ContactPersonArea from './Areas/ContactPersonArea';

const InterestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const initialValues: FormData = {
    companyName: '',
    contactName: '',
    contactMail: '',
    phone: '',
    interests: [],
    comments: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(JSON.stringify(values));
        /*
        await fetch(`https://dg34nuugf4.execute-api.eu-west-1.amazonaws.com/prod/sendMail`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });*/
        await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => setSubmitted(true));
      }}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting, setSubmitting, submitForm }) => {
        const submit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          await submitForm()
            .then(() => setSubmitting(false))
            .then(() => console.log(isSubmitting));
        };
        console.log(isSubmitting);
        return (
          <Form>
            <Header />
            <InformationArea />
            <CompanyArea />
            <ContactPersonArea />
            <CheckboxArea />
            <CommentsArea />
            <SubmitArea onClick={submit} isSubmitting={isSubmitting} submitted={submitted} />
          </Form>
        );
      }}
    </Formik>
  );
};

const Form = styled.form`
  max-width: 50rem;
  width: 90%;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${media.mobileOnly} {
    width: 100%;
  }
`;

export default InterestForm;
