import React from 'react';
import Category from '../Category';
import TextField from '../Inputs/TextField';

const ContactPersonSection = () => {
  return (
    <Category title="Kontaktperson">
      <TextField label="Navn" name="contactName" placeholder="Ole Nordmann" />
      <TextField name="contactMail" type="email" label="E-post" placeholder="olenordmann@bedrift.com" />
      <TextField name="phone" type="tel" label="Telefonnummer" placeholder="+47 360 69 420" />
    </Category>
  );
};

export default ContactPersonSection;
