import React from 'react';
import { StyledGridSection, StyledSection, DateRow } from './modules/Sections';
import { StyledGridElem } from './modules/GridElem';

import { SectionTitle, LargeNums, Subtitle } from './modules/Titles';

const DataAll = (props) => {
  if (!props.global) return '';
  if (props.global) {
    const {
      cases,
      critical,
      deaths,
      todayRecovered,
      todayCases,
      todayDeaths,
      updated,
    } = props.global;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const date = new Date(updated);

    return (
      <StyledSection>
        <SectionTitle>Worldwide</SectionTitle>
        <StyledGridSection>
          <StyledGridElem>
            <Subtitle>Total Cases:</Subtitle>
            <LargeNums>{cases.toLocaleString()}</LargeNums>
          </StyledGridElem>
          <StyledGridElem>
            <Subtitle>Critical: </Subtitle>
            <LargeNums>{critical.toLocaleString()}</LargeNums>
          </StyledGridElem>
          <StyledGridElem>
            <Subtitle>Deaths: </Subtitle>
            <LargeNums>{deaths.toLocaleString()}</LargeNums>
          </StyledGridElem>

          <StyledGridElem>
            <Subtitle>Today Cases: </Subtitle>
            <LargeNums>{todayCases.toLocaleString()}</LargeNums>
          </StyledGridElem>
          <StyledGridElem>
            <Subtitle>Today Recovered:</Subtitle>
            <LargeNums>{todayRecovered.toLocaleString()}</LargeNums>
          </StyledGridElem>
          <StyledGridElem>
            <Subtitle>Today Deaths:</Subtitle>
            <LargeNums>{todayDeaths.toLocaleString()}</LargeNums>
          </StyledGridElem>
          <DateRow>
            <Subtitle>Updated: </Subtitle>
            <p>{date.toLocaleString('default', options)}</p>
          </DateRow>
        </StyledGridSection>
      </StyledSection>
    );
  }
};

export default DataAll;
