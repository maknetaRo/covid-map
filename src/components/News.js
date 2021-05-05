import React from 'react';
import { SectionTitle } from './modules/Titles';
import { StyledSection, StyledNews } from './modules/Sections';
import NewsArticle from './modules/NewsArticle';

const News = (props) => {
  return (
    <StyledSection>
      <SectionTitle>Top News</SectionTitle>
      {!props.news ? null : (
        <StyledNews>
          {props.news[0].articles.map((item) => {
            return <NewsArticle {...item} />;
          })}
        </StyledNews>
      )}
    </StyledSection>
  );
};

export default News;
