import { Formik, FormikProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import CompanySection from './Sections/CompanySection';
import ContactPersonSection from './Sections/ContactPersonSection';
import { colors } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';

const Form = styled.form`
  width: 50rem;
  background-color: ${colors.grayLighten90};
`;
export interface FormData {
  companyName: string;
  contactName: string;
  contactMail: string;
  phone: string;
  /*
  semesters: string[];
  interests: string[];*/
}

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
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

const InterestForm = () => {
  const initialValues: FormData = {
    companyName: '',
    contactName: '',
    contactMail: '',
    phone: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
      validationSchema={ValidationSchema}
    >
      {(props: FormikProps<FormData>) => (
        <Form>
          <CompanySection />
          <ContactPersonSection />
          <DisplayFormikState {...props} />
        </Form>
      )}
    </Formik>
  );
};

export default InterestForm;
