import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import CompanySection from './Sections/CompanySection';
import ContactPersonSection from './Sections/ContactPersonSection';
import { colors } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';
import CheckboxSection from './Sections/CheckboxSection';
import { FormData } from 'models/Form/Form';
import InformationSection from './Sections/InformationSection';
import { Header } from 'components/Header';
import CommentsSection from './Sections/CommentsSection';
import SubmitButton from './SubmitButton';

const Form = styled.form`
  width: 50rem;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
        await fetch(`http://localhost:9090/sendmail`, {
          method: 'post',
          mode: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        console.log('SENT MAIL');
      }}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => (
        <Form>
          <Header />
          <InformationSection />
          <CompanySection />
          <ContactPersonSection />
          <CheckboxSection />
          <CommentsSection />
          <SubmitButton onClick={handleSubmit} />
        </Form>
      )}
    </Formik>
  );
};

export default InterestForm;
