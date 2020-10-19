import { Formik } from 'formik';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { FormData } from 'common/FormData';
import { ValidationSchema } from 'common/ValidaitonSchema';
import InformationArea from './Areas/InformationArea';
import { Banner } from '../Banner';
import CompanyArea from './Areas/CompanyArea';
import ContactPersonArea from './Areas/ContactPersonArea';
import InterestArea from './Areas/InterestArea';
import CommentsArea from './Areas/CommentsArea';
import SubmitArea from './Areas/SubmitArea';

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
        await fetch(`https://dg34nuugf4.execute-api.eu-west-1.amazonaws.com/prod/sendMail`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(() => setSubmitted(true))
          .catch((err) => console.log(err));
        setSubmitted(true);
      }}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting, setSubmitting, submitForm, errors, submitCount }) => {
        const submit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          await submitForm().then(() => setSubmitting(false));
        };
        return (
          <Form>
            <Banner />
            <InformationArea />
            <CompanyArea />
            <ContactPersonArea />
            <InterestArea />
            <CommentsArea />
            <SubmitArea
              onClick={submit}
              isSubmitting={isSubmitting}
              submitted={submitted}
              hasErrors={!!errors}
              submitCount={submitCount}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

const Form = styled.form`
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

export default InterestForm;
