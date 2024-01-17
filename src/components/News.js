import React from "react";
import { SectionTitle } from "./modules/Titles";
import { StyledSection, StyledNews } from "./modules/Sections";
import NewsArticle from "./modules/NewsArticle";

const News = (props) => {
  return (
    <StyledSection>
      <SectionTitle>Top News</SectionTitle>
      {!props.dataNews.articles ? (
        ""
      ) : (
        <StyledNews>
          {props.dataNews.articles.map((item) => {
            return <NewsArticle {...item} />;
          })}
        </StyledNews>
      )}
    </StyledSection>
  );
};

export default News;
