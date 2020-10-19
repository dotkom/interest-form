import React from 'react';
import styled from 'styled-components';
import { colors, Paragraph, Link } from '@dotkomonline/design-system';
import Area from '../../Area';

const InfoText = styled(Paragraph)`
  padding: 15px 0px;
  line-height: 1.5;
  border-width: 1px 0px;
  border-color: ${colors.grayDarken30};
  border-style: solid;
  font-size: 1rem;
`;

const InformationArea = () => {
  return (
    <Area>
      <S.Wrapper>
        <Paragraph>
          Dette skjemaet skal brukes til å melde interesse for samarbeid med Online. Du kan lese mer om hva Online
          tilbyr til bedrifter på <Link href="https://online.ntnu.no/#!business">nettsiden vår</Link>. I skjemaet har du
          mulighet til å huke av for interesse av ulike produkt i tillegg til å legge igjen en kommentar eller spørsmål.
          Innholdet vil bli send på mail til bedriftskomiteen og dere vil få svar så fort de har kapasitet.
        </Paragraph>
        <Paragraph>Merk at skjemaet kun er for å melde interesse og fungerer da ikke som påmelding.</Paragraph>
      </S.Wrapper>
    </Area>
  );
};

const S = {
  Wrapper: styled.div`
    font-size: 1rem;
    padding: 15px 0px;
    line-height: 1.5;
    border-width: 1px 0px;
    border-color: ${colors.grayDarken30};
    border-style: solid;
  `,
};

export default InformationArea;
