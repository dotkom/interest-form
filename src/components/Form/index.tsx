import React from "react";
import styled from "styled-components";
import CompanySection from "./Sections/CompanySection";
import ContactPersonSection from "./Sections/ContactPersonSection";

const FormContainer = styled.form`
  width: 46rem;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const Form: React.FC = () => {
  return (
    <FormContainer>
      <CompanySection />
      <ContactPersonSection />
    </FormContainer>
  );
};

export default Form;
