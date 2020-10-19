import React from 'react';
import Area from '../../Area';
import TextField from '../../Inputs/TextField';

const ContactPersonArea = () => {
  return (
    <Area title="Kontaktperson">
      <TextField label="Navn" name="contactName" placeholder="Ole Nordmann" />
      <TextField name="contactMail" type="email" label="E-post" placeholder="olenordmann@bedrift.com" />
      <TextField name="phone" type="tel" label="Telefonnummer" placeholder="+47 360 69 420" />
    </Area>
  );
};

export default ContactPersonArea;
