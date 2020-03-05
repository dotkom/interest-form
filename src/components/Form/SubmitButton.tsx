import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';

interface SubmitButtonProps {
  onClick: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <ButtonContainer>
      <Button color="primary" value="Submit" onClick={handleSubmit} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  justify-content: flex-end;
  width: 100%;
`;
export default SubmitButton;
