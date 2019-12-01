import React, { FC } from 'react';
import Category from '../Category';
import BaseTextField from './BaseTextField';

const CompanySection: FC<{}> = () => {
  return (
    <Category title="Bedrift" description="Navn på bedriften du representerer">
      <BaseTextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Category>
  );
};

export default CompanySection;
