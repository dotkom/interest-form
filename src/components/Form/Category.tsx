import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, Link } from '@dotkomonline/design-system';

interface LinkText {
  href: string;
  subString: string;
}

interface CategoryProps {
  title?: string;
  description?: string;
  link?: LinkText;
}

export const CategoryTitle = styled.h2`
  color: ${colors.grayDarken90};
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

const Text = styled.p`
  color: ${colors.grayDarken90};
  font-size: 14px;
  margin-bottom: 0.7rem;
`;

const CategoryContainer = styled.section`
  display: flex;
  justify-content: center;
  flex: 1 1 0px;
  width: 100%;
  padding: 20px 50px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

/**
 *
 * @param description descriptionText
 * @param link object with url and the substring part in description to replace
 * @returns an <p></p> element with the substring in the link param replaced with an Link element
 */
const getDescription = (description: string, link?: LinkText) => {
  if (link && description.includes(link.subString)) {
    const subIndex = description.indexOf(link.subString);
    return (
      <Text>
        {description.substr(0, subIndex)}
        <Link>{link.subString}</Link>
        {description.substr(subIndex + link.subString.length - 1, -1)}
      </Text>
    );
  } else {
    return <Text>{description}</Text>;
  }
};

const Category: FC<CategoryProps> = ({ title, link, description, children }) => {
  return (
    <CategoryContainer>
      <FlexContainer>
        {title && <CategoryTitle>{title}</CategoryTitle>}
        {description && getDescription(description, link)}
        {children}
      </FlexContainer>
    </CategoryContainer>
  );
};

export default Category;
