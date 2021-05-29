import React, { useState } from 'react';
import Chart from './Chart';
import { StyledSection, ChartSection } from './modules/Sections';
import { SectionTitle } from './modules//Titles';
import { StyledButton } from './modules/Buttons';
import Select from 'react-select';

const DataHistorical = ({ dataHistAll }) => {
  const options = [
    { text: 'Always', value: '500' },
    { text: 'Last 7 days', value: '7' },
    { text: 'Last 14 days', value: '14' },
    { text: 'Last 30 days', value: '30' },
  ];

  const [ranges, setRanges] = useState(options);

  return (
    <ChartSection>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Visualisations</SectionTitle>
        <select>
          {ranges.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
        
      </div>
      {!dataHistAll ? null : (
        <>
          {[dataHistAll].map((elem) => {
            const { cases, deaths, recovered } = elem[0];
            console.log(cases);
            console.log(deaths);
            console.log(recovered);
            return (
              <React.Fragment>
                <StyledSection style={{ marginLeft: '0', marginRight: '0' }}>
                  <SectionTitle>Cases</SectionTitle>
                  {!cases ? '' : <Chart data={cases} />}
                </StyledSection>
                <StyledSection style={{ marginLeft: '0', marginRight: '0' }}>
                  <SectionTitle>Deaths</SectionTitle>
                  {!deaths ? '' : <Chart data={deaths} />}
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
