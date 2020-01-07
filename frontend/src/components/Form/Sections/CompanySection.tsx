import React, { FC } from 'react';
import Category from '../Category';
import TextField from '../Inputs/TextField';

const CompanySection: FC<{}> = () => {
  return (
    <Category title="Bedrift" description="Navn på bedriften du representerer">
      <TextField name="companyName" label="Navn" placeholder="Bedrift AS" />
    </Category>
  );
};

export default CompanySection;
