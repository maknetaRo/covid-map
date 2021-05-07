import React from 'react';
import {
  StyledGridElem,
  StyledGridSection,
  StyledSection,
  DateRow,
} from './modules/Sections';
import { SectionTitle, LargeNums, Subtitle, SubtitleGrid } from './modules/Titles';

const DataAll = (props) => {
  return (
    <StyledSection>
      <SectionTitle>Worldwide</SectionTitle>
      {!props.global ? null : (
        <StyledGridSection>
          {[props.global].map((item) => {
            const {
              cases,
              critical,
              deaths,
              todayRecovered,
              todayCases,
              todayDeaths,
              updated,
            } = item;
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
              <>
                <StyledGridElem>
                  <SubtitleGrid>Total Cases:</SubtitleGrid>
                  <LargeNums>{cases.toLocaleString()}</LargeNums>
                </StyledGridElem>
                <StyledGridElem>
                  <SubtitleGrid>Critical: </SubtitleGrid>
                  <LargeNums>{critical.toLocaleString()}</LargeNums>
                </StyledGridElem>
                <StyledGridElem>
                  <SubtitleGrid>Deaths: </SubtitleGrid>
                  <LargeNums>{deaths.toLocaleString()}</LargeNums>
                </StyledGridElem>

                <StyledGridElem>
                  <SubtitleGrid>Today Cases: </SubtitleGrid>
                  <LargeNums>{todayCases.toLocaleString()}</LargeNums>
                </StyledGridElem>
                <StyledGridElem>
                  <SubtitleGrid>Today Recovered:</SubtitleGrid>
                  <LargeNums>{todayRecovered.toLocaleString()}</LargeNums>
                </StyledGridElem>
                <StyledGridElem>
                  <SubtitleGrid>Today Deaths:</SubtitleGrid>
                  <LargeNums>{todayDeaths.toLocaleString()}</LargeNums>
                </StyledGridElem>
                <DateRow>
                  <Subtitle>Updated: </Subtitle>
                  <p>{date.toLocaleString('default', options)}</p>
                </DateRow>
              </>
            );
          })}
        </StyledGridSection>
      )}
    </StyledSection>
  );
};

export default DataAll;
