import React from 'react';
import Area from '../../Area';
import TextArea from '../../Inputs/TextArea';

const CommentsArea = () => {
  return (
    <Area title="Kommentarer">
      <TextArea
        name="comments"
        placeholder="Gjerne utdyp hvem dere er, hva dere spesifikt ønsker, hvordan dere ønsker arrangementet utført og annet relevant"
      />
    </Area>
  );
};

export default CommentsArea;
