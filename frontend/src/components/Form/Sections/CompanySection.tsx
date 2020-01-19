import React, { FC } from 'react';
import Category from '../Category';
import TextField from '../Inputs/TextField';

const CompanySection: FC<{}> = () => {
  return (
    <Category title="Bedrift">
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Category>
  );
};

export default CompanySection;
