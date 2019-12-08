import React from 'react';
import CheckboxArea from '../Inputs/CheckboxArea';
import styled from 'styled-components';
import { colors } from '@dotkomonline/design-system';

export const CategoryTitle = styled.h2`
  color: ${colors.grayDarken90};
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 0px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 10px;
`;

const InterestsSection = () => {
  const interests = ['Bedrifts-arrangemant', 'Faglig-arrangemant', 'Suge?', 'Techtalks', 'Annonse i Offline'];
  return (
    <CategoryContainer>
      <FlexContainer>
        <CategoryTitle>{'Interesser'}</CategoryTitle>
        <CheckboxArea<string> values={interests} name="interests" toLabel={(value: string) => value} />
      </FlexContainer>
    </CategoryContainer>
  );
};

export default InterestsSection;
