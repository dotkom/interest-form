import React from "react";
import styled from "styled-components";

import { colors, Logo } from "@dotkomonline/design-system";

const HeaderStyle = styled.header`
  background-color: ${colors.primary};
  display: grid;
  justify-content: center;
  box-sizing: border-box;
`;

const Text = styled.h2`
  color: ${colors.white};
  text-align: center;
  letter-spacing: 2px;
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
        <Logo
          width="26rem"
          primaryColor={colors.white}
          seocondaryColor={colors.primary}
        />
      </LogoContainer>
      <Text>Meld-interesse skjema</Text>
    </HeaderStyle>
  );
};
