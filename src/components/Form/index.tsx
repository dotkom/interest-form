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
/*
const DisplayFormikState = (props: FormikProps<FormData>) => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong>
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
*/
const InterestForm = () => {
  const initialValues: FormData = {
    companyName: '',
    contactName: '',
    contactMail: '',
    phone: '',
    semesters: [],
    interests: [],
    comments: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
      validationSchema={ValidationSchema}
    >
      {() => (
        <Form>
          <Header />
          <InformationSection />
          <CompanySection />
          <ContactPersonSection />
          <CheckboxSection />
          <CommentsSection />
          <SubmitButton />
        </Form>
      )}
    </Formik>
  );
};

export default InterestForm;
