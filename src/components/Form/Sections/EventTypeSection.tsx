import React from 'react';
import CheckboxArea from '../Inputs/CheckboxArea';
import Category from '../Category';
import { CheckboxItem } from 'models/Form/Inputs/Checkbox';
const EventTypeSection = () => {
  const eventInterests: CheckboxItem<string>[] = [
    { label: 'Bedriftspresentasjon', value: 'bedpres' },
    { label: 'Kurs', value: 'kurs' },
    { label: 'ITEX', value: 'itex' },
    { label: 'Techtalks', value: 'techtalks' },
    { label: 'Alternativt arrangement', value: 'alternativ' },
  ];

  return (
    <Category title="Arrangement">
      <CheckboxArea<string> values={eventInterests} name="interests" />
    </Category>
  );
};

export default EventTypeSection;
