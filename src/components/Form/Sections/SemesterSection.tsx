import React from 'react';
import { getAvailableSemesters } from 'util/Semester';
import { Semester } from 'models/Semester';
import CheckboxArea from '../Inputs/CheckboxArea';
import Category from '../Category';

const SemesterSection = () => {
  const semesters = getAvailableSemesters();
  return (
    <Category title="Semester">
      <CheckboxArea<Semester> values={semesters} name="semesters" />
    </Category>
  );
};

export default SemesterSection;
