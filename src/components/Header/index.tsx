import React from 'react';
import styled from 'styled-components';

import { colors, Logo } from '@dotkomonline/design-system';

const HeaderStyle = styled.header`
  background-color: ${colors.primary};
  display: grid;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

const Text = styled.h2`
  color: ${colors.white};
  text-align: center;
  letter-spacing: 2px;
  padding: 10px 0;
`;

const LogoContainer = styled.div`
  max-width: 100vw;
  box-sizing: border-box;
  padding: 1.5rem;
`;

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <LogoContainer>
        <Logo width="26rem" primaryColor={colors.white} seocondaryColor={colors.primary} />
      </LogoContainer>
      <Text>Meld-interesse skjema</Text>
    </HeaderStyle>
  );
};
