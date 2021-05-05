import React, { useMemo } from 'react';
import { Styles } from './modules/TableElements';
import Table from './Table';

const CountryList = ({ countries }) => {
  function formatLargeNums(value) {
    return value.toLocaleString().replace(/,/gi, ' ');
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Cases',
        columns: [
          {
            Header: '',
            accessor: 'countryInfo.flag',
            Cell: ({ cell: { value } }) => (
              <img src={value} alt="Flag" width={30} />
            ),
          },
          {
            Header: 'Localization',
            accessor: 'country',
          },
          {
            Header: 'All Cases',
            accessor: 'cases',
            Cell: ({ cell: { value } }) => formatLargeNums(value),
          },
          {
            Header: "Today's Cases",
            accessor: 'todayCases',
            Cell: ({ cell: { value } }) => formatLargeNums(value),
          },
          {
            Header: 'All Deaths',
            accessor: 'deaths',
            Cell: ({ cell: { value } }) => formatLargeNums(value),
          },
          {
            Header: 'Deaths Per Million',
            accessor: 'deathsPerOneMillion',
            Cell: ({ cell: { value } }) => formatLargeNums(value),
          },
          {
            Header: 'Deaths Today',
            accessor: 'todayDeaths',
            Cell: ({ cell: { value } }) => formatLargeNums(value),
          },
        ],
      },
    ],
    []
  );

  return !countries ? (
    <p>Loading...</p>
  ) : (
    <Styles>
      <Table columns={columns} data={countries} />
    </Styles>
  );
};

export default CountryList;
