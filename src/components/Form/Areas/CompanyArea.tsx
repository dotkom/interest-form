import React, { FC } from 'react';
import Area from '../Area';
import TextField from '../Inputs/TextField';

const CompanyArea: FC<{}> = () => {
  return (
    <Area title="Bedrift">
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Area>
  );
};

export default CompanyArea;
