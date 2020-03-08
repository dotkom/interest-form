import { Formik } from 'formik';
import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { colors } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';
import { FormData } from 'models/Form/Form';
import { Header } from 'components/Header';
import SubmitButton from './Inputs/SubmitButton';
import InformationArea from './Areas/InfromationArea';
import CompanyArea from './Areas/CompanyArea';
import CheckboxArea from './Areas/CheckboxArea';
import CommentsArea from './Areas/CommentsArea';
import ContactPersonArea from './Areas/ContactPersonArea';

const InterestForm = () => {
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
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log('SENT MAIL');
      }}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting, setSubmitting, submitForm }) => {
        const submit = async (e: FormEvent<HTMLFormElement>) => {
          setSubmitting(true);
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
            <SubmitButton onClick={submit} isSubmitting={isSubmitting} />
          </Form>
        );
      }}
    </Formik>
  );
};

const Form = styled.form`
  width: 50rem;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default InterestForm;
