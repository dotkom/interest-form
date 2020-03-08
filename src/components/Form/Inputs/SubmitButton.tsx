import React from 'react';
import styled from 'styled-components';
import { Button, Spinner } from '@dotkomonline/design-system';

interface SubmitButtonProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const SubmitButton = ({ onClick, isSubmitting }: SubmitButtonProps) => {
  return (
    <Wrapper>
      <SpinnerContainer>{isSubmitting ? <Spinner /> : null}</SpinnerContainer>
      <ButtonContainer>
        <Button color="primary" value="Submit" onClick={onClick} />
      </ButtonContainer>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 10;
`;
const SpinnerContainer = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 85%;
  padding: 20px 50px;
`;

export default SubmitButton;
