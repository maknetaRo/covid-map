import React from 'react';
import { StyledSection, ChartSection } from './modules/Sections';
import { SectionTitle } from './modules//Titles';
import { StyledButton } from './modules/Buttons';

const DataHistorical = ({ dataHistAll }) => {
  console.log(dataHistAll);
  return (
    <ChartSection>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Visualisations</SectionTitle>
        <StyledButton primary>30 days</StyledButton>
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
                  {Object.keys(cases).map((obj) => {
                    const day = new Date(obj).toLocaleDateString();

                    const number = cases[obj].toLocaleString();
                    //console.log(day, number);
                    return (
                      <li>
                        {day} - {number}
                      </li>
                    );
                  })}
                </StyledSection>
                <StyledSection style={{ marginLeft: '0', marginRight: '0' }}>
                  <SectionTitle>Deaths</SectionTitle>
                  {Object.keys(deaths).map((obj) => {
                    const day = new Date(obj).toLocaleDateString();

                    const number = cases[obj].toLocaleString();
                    //console.log(day, number);
                    return (
                      <li>
                        {day} - {number}
                      </li>
                    );
                  })}
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
