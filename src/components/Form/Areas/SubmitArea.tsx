import React from 'react';
import styled from 'styled-components';
import { Button, Spinner, Paragraph } from '@dotkomonline/design-system';
import Area from '../Area';

interface SubmitAreaProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitted: boolean;
}

const SubmitArea = ({ onClick, isSubmitting, submitted }: SubmitAreaProps) => {
  return (
    <Area>
      <S.Wrapper>
        <S.SpinnerDiv>
          {isSubmitting ? <Spinner /> : null}
          {submitted ? <Paragraph>Din interesse har blitt sendt inn!</Paragraph> : null}
        </S.SpinnerDiv>
        <S.ButtonDiv>
          <Button color="primary" value="Submit" onClick={onClick} />
        </S.ButtonDiv>
      </S.Wrapper>
    </Area>
  );
};
const S = {
  ButtonDiv: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    min-height: 50px;
    padding: 10px 0;
  `,
  SpinnerDiv: styled.div`
    width: 100%;
    min-height: 50px;
  `,
  Wrapper: styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-self: center;
  `,
};
export default SubmitArea;
