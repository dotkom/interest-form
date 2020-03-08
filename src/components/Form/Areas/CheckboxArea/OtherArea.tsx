import CheckboxFields from 'components/Form/Inputs/CheckboxFields';
import React from 'react';
import Area from 'components/Form/Area';

const OtherArea = () => {
  const otherInterests = [
    { label: 'Annonse i Offline', value: 'offlineAd' },
    { label: 'Artikkel i Offline', value: 'offlineAd' },
    { label: 'Jobbannonse', value: 'jobAd' },
    { label: 'Start-up-rekruttering', value: 'oppurtunities' },
  ];
  return (
    <Area title="Annet">
      <CheckboxFields<string> values={otherInterests} name="interests" />
    </Area>
  );
};

export default OtherArea;
