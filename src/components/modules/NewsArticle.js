import React from 'react';
import styled from 'styled-components';
import { ArticleTitle, Subtitle } from './Titles';

const StyledArt = styled.article`
  padding: 2.5rem 1rem;
  border-top: 1px solid #dadce0;
`;

export const StyledLink = styled.a`
  color: black;
`;

export const Content = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 1rem auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const NewsArticle = (props) => {
  const { title, content, url, image, publishedAt } = props;

  return (
    <StyledArt>
      <ArticleTitle>
        <StyledLink href={url} target="_blank">{title}</StyledLink>
      </ArticleTitle>
      <Subtitle>{publishedAt}</Subtitle>
      <Content>{content}</Content>
      <Image src={image} />
      Source: <StyledLink href={props.source.url} target="_blank"> {props.source.name}</StyledLink>
    </StyledArt>
  );
};

export default NewsArticle;
