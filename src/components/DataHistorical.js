import React from 'react';
import Chart from './Chart'
import { StyledSection, ChartSection } from './modules/Sections';
import { SectionTitle } from './modules//Titles';
import { StyledButton } from './modules/Buttons';

const DataHistorical = ({ dataHistAll }) => {
  console.log(dataHistAll);
  return (
    <ChartSection>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Visualisations</SectionTitle>
        <StyledButton primary>Always</StyledButton>
      </div>
      {!dataHistAll ? null : (
        <>
          {[dataHistAll].map((elem) => {
            const { cases, deaths } = elem[0];
            console.log(cases);
            console.log(deaths);
            return (
              <React.Fragment>
                <StyledSection style={{ marginLeft: '0', marginRight: '0' }}>
                  <SectionTitle>Cases</SectionTitle>
                  {!cases ? "" :  <Chart data={cases} /> }                 
                </StyledSection>
                <StyledSection style={{ marginLeft: '0', marginRight: '0' }}>
                  <SectionTitle>Deaths</SectionTitle>
                  {!deaths ? "" : <Chart data={deaths} />}
            </StyledSection>
              </React.Fragment>
            );
          })}
        </>
      )}
    </ChartSection>
  );
};

export default DataHistorical;
