import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "@dotkomonline/design-system";

interface Props {
  title: String;
  description: String;
  children: React.ReactNode;
}

const CategoryTitle = styled.h2`
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
  flex-direction: column;
  width: 100%;
`;

const Category: FC<Props> = ({ title, description, children }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <Text>{description}</Text>
      {children}
    </CategoryContainer>
  );
};

export default Category;
