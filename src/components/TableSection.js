import React from 'react';
import CountryList from './CountryList';
import { StyledSection, StyledTableSection } from './modules/Sections';
import { SectionTitle } from './modules/Titles';
import { StyledButton } from './modules/Buttons';

const TableSection = (props) => {
  return (
    <StyledSection>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SectionTitle>Statistics</SectionTitle>
      
        <StyledButton primary>Cases</StyledButton>
       
      </div>
      <StyledTableSection>
        <CountryList countries={props.countries} />
      </StyledTableSection>
    </StyledSection>
  );
};

export default TableSection;
