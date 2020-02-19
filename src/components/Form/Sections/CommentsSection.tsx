import React from 'react';
import Category from '../Category';
import TextArea from '../Inputs/TextArea';

const CommentsSection = () => {
  return (
    <Category title="Kommentarer">
      <TextArea
        name="comments"
        placeholder="Gjerne utdyp hvem dere er, hva dere spesifikt ønsker, hvordan dere ønsker arrangementet utført og annet relevant"
      />
    </Category>
  );
};

export default CommentsSection;
