import React from 'react';
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';

const ButtonContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = () => {
  return (
    <ButtonContainer>
      <Button color="primary" value="Submit" />
    </ButtonContainer>
  );
};

export default SubmitButton;
