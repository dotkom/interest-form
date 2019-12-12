import React from 'react';
import styled from 'styled-components';
import { colors, Icon } from '@dotkomonline/design-system';

const InfoText = styled.p`
  padding: 15px 0px;
  margin: 0px 20px 50px 20px;
  border-width: 1px 0px;
  border-color: ${colors.grayDarken30};
  border-style: solid;
`;

const InformationSection = () => {
  return (
    <InfoText>
      Dette er et interessesjema bla bla bla og vi garantere ingenting bla bla Lorem Ipsum is simply dummy text of the
      printing and typesetting industry.
      <Icon name="accessibility" />
      Dette er en T-pose
      <Icon name="accessibility" />
      Dette er en T-pose
      <Icon name="accessibility" />
      Dette er en T-pose
      <Icon name="accessibility" />
      Dette er en T-pose
    </InfoText>
  );
};

export default InformationSection;
