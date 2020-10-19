import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';
import Area from 'src/components/Area';
import SubmitStatus from './SubmitStatus';

interface SubmitAreaProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  submitted: boolean;
  isValid: boolean;
  hasError: boolean;
  submitCount: number;
}

const SubmitArea: FC<SubmitAreaProps> = ({ onClick, ...props }) => {
  return (
    <Area>
      <S.Wrapper>
        <SubmitStatus {...props} />
        <Button color="primary" value="Send inn" onClick={onClick} disabled={props.submitted || props.loading} />
      </S.Wrapper>
    </Area>
  );
};
const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 500px;
    align-self: center;
    display: grid;
    grid-template-columns: 3.5fr 1.5fr;
    gap: 2rem;
    & > button {
      max-height: 44px;
    }
  `,
};
export default SubmitArea;
