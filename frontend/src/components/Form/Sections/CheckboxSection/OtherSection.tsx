import CheckboxArea from 'components/Form/Inputs/CheckboxArea';
import React from 'react';
import Category from 'components/Form/Category';
const OtherSection = () => {
  const otherInterests = [
    { label: 'Annonse i Offline', value: 'offlineAd' },
    { label: 'Artikkel i Offline', value: 'offlineAd' },
    { label: 'Jobbannonse', value: 'jobAd' },
    { label: 'Start-up-rekruttering', value: 'oppurtunities' },
  ];
  return (
    <Category title="Annet">
      <CheckboxArea<string> values={otherInterests} name="interests" />
    </Category>
  );
};

export default OtherSection;
