import React from 'react';
import CheckboxField from 'components/Form/Inputs/CheckboxFields';
import { CheckboxItem } from 'models/Form/Inputs/Checkbox';
import Area from 'components/Form/Area';

const EventTypeArea = () => {
  const eventInterests: CheckboxItem<string>[] = [
    { label: 'Bedriftspresentasjon', value: 'bedpres' },
    { label: 'Kurs', value: 'kurs' },
    { label: 'ITEX', value: 'itex' },
    { label: 'Techtalks', value: 'techtalks' },
    { label: 'Alternativt arrangement', value: 'alternativ' },
  ];

  return (
    <Area
      title="Arrangement"
      link={{ href: 'https://online.ntnu.no/', subString: 'mer info' }}
      description={'Vil du vite mer om de ulike type arrangementene? Trykk her for mer info.'}
    >
      <CheckboxField<string> values={eventInterests} name="interests" />
    </Area>
  );
};

export default EventTypeArea;
