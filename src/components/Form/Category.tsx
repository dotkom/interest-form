import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '@dotkomonline/design-system';

interface CategoryProps {
  title: string;
  description?: string;
}

export const CategoryTitle = styled.h2`
  color: ${colors.grayDarken90};
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

const Text = styled.p`
  color: ${colors.grayDarken90};
  font-size: 14px;
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

const Category: FC<CategoryProps> = ({ title, description, children }) => {
  return (
    <CategoryContainer>
      <FlexContainer>
        <CategoryTitle>{title}</CategoryTitle>
        {description && <Text>{description}</Text>}
        {children}
      </FlexContainer>
    </CategoryContainer>
  );
};

export default Category;
