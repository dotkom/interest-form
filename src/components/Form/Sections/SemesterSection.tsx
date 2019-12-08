import React from 'react';
import { getAvailableSemesters, Semester } from 'util/Semester';
import CheckboxArea from '../Inputs/CheckboxArea';
import Category from '../Category';

const SemesterSection = () => {
  const semesters = getAvailableSemesters();
  return (
    <Category title="Semester">
      <CheckboxArea<Semester>
        values={semesters}
        name="semesters"
        toLabel={(value) => value.season + value.year.toString().substr(-2)}
      />
    </Category>
  );
};

export default SemesterSection;
