import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, Link, media } from '@dotkomonline/design-system';

interface LinkText {
  href: string;
  subString: string;
}

interface AreaProps {
  title?: string;
  description?: string;
  link?: LinkText;
}

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
      <S.Text>
        {description.substr(0, subIndex)}
        <Link href={link?.href}>{link.subString}</Link>
        {description.substr(subIndex + link.subString.length - 1, -1)}
      </S.Text>
    );
  } else {
    return <S.Text>{description}</S.Text>;
  }
};

const Area: FC<AreaProps> = ({ title, link, description, children }) => {
  return (
    <S.Section>
      <S.Wrapper>
        {title && <S.Title>{title}</S.Title>}
        {description && getDescription(description, link)}
        {children}
      </S.Wrapper>
    </S.Section>
  );
};

const S = {
  Title: styled.h2`
    color: ${colors.grayDarken90};
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    font-size: 1.4rem;
  `,
  Text: styled.p`
    color: ${colors.grayDarken90};
    font-size: 14px;
    margin-bottom: 0.7rem;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  Section: styled.section`
    display: flex;
    justify-content: center;
    flex: 1 1 0px;
    width: 100%;
    padding: 20px 50px;
    @media ${media.mobileOnly} {
      padding: 10px 20px;
    }
  `,
};

export default Area;
