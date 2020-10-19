import React from 'react';
import styled from 'styled-components';
import Area from 'src/components/Area';
import Checkbox from 'src/components/Inputs/Checkbox';

interface Interest {
  label: string;
  value: string;
}

// Bedriftsarrangement, Kurs, Annonse i Offline, Stillingsutlysning, Tech Talks og IT-ekskursjonen.
const interests: Interest[] = [
  {
    label: 'Bedriftsarrangement',
    value: 'bedpres',
  },
  {
    label: 'Kurs',
    value: 'kurs',
  },
  {
    label: 'Annonse i Offline',
    value: 'offline',
  },
  {
    label: 'Stillingsutlysning',
    value: 'online_ad',
  },
  {
    label: 'Tech talks',
    value: 'techtalks',
  },
  {
    label: 'IT-ekskrusjon',
    value: 'excursion',
  },
];

const InterestArea = () => {
  return (
    <Area title="Interesser">
      <S.Div>
        {interests.map((interest) => (
          <Checkbox name="interests" label={interest.label} value={interest.value} key={interest.value} />
        ))}
      </S.Div>
    </Area>
  );
};

const S = {
  Div: styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(1fr);
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  `,
};

export default InterestArea;
