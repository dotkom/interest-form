import React from 'react';
import CheckboxArea from 'components/Form/Inputs/CheckboxArea';
import Category from 'components/Form/Category';
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
    <Category
      title="Arrangement"
      link={{ href: 'https://online.ntnu.no/', subString: 'mer info' }}
      description={'Vil du vite mer om de ulike type arrangementene? Trykk her for mer info.'}
    >
      <CheckboxArea<string> values={eventInterests} name="interests" />
    </Category>
  );
};

export default EventTypeSection;
