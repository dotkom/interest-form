import { Formik, FormikProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import CompanySection from './Sections/CompanySection';
import ContactPersonSection from './Sections/ContactPersonSection';
import { colors, Button } from '@dotkomonline/design-system';
import { ValidationSchema } from '../../util/ValidaitonSchema';
import SemesterSection from './Sections/SemesterSection';
import TextArea from './Inputs/TextArea';
import OtherSection from './Sections/OtherSection';
import EventTypeSection from './Sections/EventTypeSection';
import { FormData } from 'models/Form/Form';

const Form = styled.form`
  width: 50rem;
  background-color: ${colors.grayLighten90};
  box-shadow: 5px 5px 0px 0px #cccc;
`;

const CheckboxSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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
      {(props: FormikProps<FormData>) => (
        <Form>
          <CompanySection />
          <ContactPersonSection />
          <CheckboxSection>
            <SemesterSection />
            <EventTypeSection />
            <OtherSection />
          </CheckboxSection>
          <TextArea name="comments" label="Kommentarer" placeholder="This is epic" />
          <Button color="primary" variant="outline">
            Submit
          </Button>
          <DisplayFormikState {...props} />
        </Form>
      )}
    </Formik>
  );
};

export default InterestForm;
