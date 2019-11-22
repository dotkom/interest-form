import React from "react";
import Category from "../Category";
import TextField from "../TextField";

const ContactPersonSection = () => {
  return (
    <Category
      title="Kontaktperson"
      description="Navn, mail og telefonnummer til kontaktpersonen, slik at vi kan ta kontakt"
    >
      <TextField label="Navn" placeholder="Ole Nordmann" />
      <TextField
        type="email"
        label="E-post"
        placeholder="olenordmann@bedrift.com"
      />
      <TextField type="tel" label="Telefonnummer" placeholder="360 69 420" />
    </Category>
  );
};

export default ContactPersonSection;
