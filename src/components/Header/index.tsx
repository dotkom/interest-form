import React from 'react';
import styled from 'styled-components';

import { colors, Logo } from '@dotkomonline/design-system';

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <Logo width="26rem" primaryColor={colors.white} seocondaryColor={colors.primary} />
      </S.Wrapper>
      <S.Text>Meld-interesse skjema</S.Text>
    </S.Header>
  );
};

const S = {
  Text: styled.h2`
    color: ${colors.white};
    text-align: center;
    letter-spacing: 2px;
    padding: 10px 0;
  `,
  Wrapper: styled.div`
    max-width: 100vw;
    box-sizing: border-box;
    padding: 1.5rem;
  `,
  Header: styled.header`
    background-color: ${colors.primary};
    display: grid;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  `,
};
