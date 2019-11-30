import React from 'react';
import Category from '../Category';
import BaseTextField from './BaseTextField';

const ContactPersonSection = () => {
  return (
    <Category
      title="Kontaktperson"
      description="Navn, mail og telefonnummer til kontaktpersonen, slik at vi kan ta kontakt"
    >
      <BaseTextField label="Navn" name="contactName" placeholder="Ole Nordmann" />
      <BaseTextField name="contactMail" type="email" label="E-post" placeholder="olenordmann@bedrift.com" />
      <BaseTextField name="phone" type="tel" label="Telefonnummer" placeholder="360 69 420" />
    </Category>
  );
};

export default ContactPersonSection;
