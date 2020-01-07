import React from 'react';
import { getAvailableSemesters } from 'util/Semester';
import { Semester } from 'models/Semester';
import CheckboxArea from 'components/Form/Inputs/CheckboxArea';
import Category from 'components/Form/Category';

const SemesterSection = () => {
  const semesters = getAvailableSemesters();
  return (
    <Category title="Semester" description="Huk av hvis dere har et spesielt tidsrom i tanke">
      <CheckboxArea<Semester> values={semesters} name="semesters" />
    </Category>
  );
};

export default SemesterSection;
