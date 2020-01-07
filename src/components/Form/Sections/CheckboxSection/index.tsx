import React from 'react';
import SemesterSection from './SemesterSection';
import EventTypeSection from './EventTypeSection';
import OtherSection from './OtherSection';

const CheckboxSection = () => {
  return (
    <>
      <SemesterSection />
      <EventTypeSection />
      <OtherSection />
    </>
  );
};

export default CheckboxSection;
