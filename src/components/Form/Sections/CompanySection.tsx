import React from 'react';
import Category from '../Category'
import TextField from '../TextField'

const CompanySection = () => {
  return (
    <Category title="Bedrift" description="Navn på bedriften du representerer">
      <TextField label="Bedriftsnavn" placeholder="Bedrift As" />
    </Category>
  );
};

export default CompanySection;
