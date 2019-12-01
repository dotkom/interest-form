import React from 'react';
import { Formik, Form as FormikForm, FormikProps } from 'formik';
import styled from 'styled-components';
import CompanySection from './Sections/CompanySection';
import ContactPersonSection from './Sections/ContactPersonSection';
import { colors } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';

const Form = styled(FormikForm)`
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

const DisplayFormikState = (props: any /*FormikProps<FormData>*/) => (
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
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={ValidationSchema}
      render={(formikBag) => (
        <Form>
          <CompanySection />
          <ContactPersonSection />
          <DisplayFormikState {...formikBag} />
        </Form>
      )}
    />
  );
};

export default InterestForm;
