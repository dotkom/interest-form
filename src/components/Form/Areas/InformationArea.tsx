import React from 'react';
import styled from 'styled-components';
import { colors, Paragraph, Link } from '@dotkomonline/design-system';
import Area from '../../Area';

const InformationArea = () => {
  return (
    <Area>
      <S.Wrapper>
        <Paragraph>Dette skjemaet skal brukes til å melde interesse for samarbeid med Online.</Paragraph>
        <Paragraph>
          Når du huker av i en sjekkboks vil vi notere deres interesse og ta dette i betraktning under planlegging av
          arrangementet. I skjemaet har du også mulighet til å legge igjen en kommentar eller spørsmål. Innholdet vil
          bli sendt på mail til bedriftskomiteen, og om dere har noen spørsmål vil disse bli besvart så fort det lar seg
          gjøre. Det er mulig å fylle ut skjemaet flere ganger.
        </Paragraph>
        <Paragraph>Merk at skjemaet kun er for å melde interesse og fungerer da ikke som påmelding.</Paragraph>
        <Paragraph>Andre henvendelser kan sendes på mail til bedriftskontakt@online.ntnu.no.</Paragraph>
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
