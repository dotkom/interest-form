import React from 'react';
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';

interface SubmitButtonProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <Lol>
      <ButtonContainer>
        <Button color="primary" value="Submit" onClick={onClick} />
      </ButtonContainer>
    </Lol>
  );
};

const ButtonContainer = styled.div`
  width: 85%;
`;

const Lol = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 50px;
  justify-content: flex-end;
`;
export default SubmitButton;
