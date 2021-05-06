import './App.css';
import Map from './components/Map';
import DataAll from './components/DataAll';
import Header from './components/Header';
import News from './components/News';
import TableSection from './components/TableSection';
import {
  StyledMain,
  StyledLeftSide,
  StyledRightSide,
} from './components/modules/Sections';

import useFetch from './useFetch';
import DataHistorical from './components/DataHistorical';
import Chart from './components/Chart'

function App() {
  const urls = [
    'https://disease.sh/v3/covid-19/countries',
    'https://disease.sh/v3/covid-19/all',
    'https://disease.sh/v3/covid-19/historical?lastdays=30',
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30',
    'https://gnews.io/api/v4/search?q=covid&lang=en&token=05062032a02062dd9bad7e6b0bbf1357',
    'https://disease.sh/v3/covid-19/historical/all?lastdays=30'
  ];

  {/*const {
    countries,
    countrJson,
    global,
    dataHistorical,
    dataVaccine,
    news,
    dataHistAll,
    loading,
    error,
  } = useFetch(urls);
  if (error) return <p>Error!</p>;
console.log(dataHistAll)*/}
  

  return (
    <div className="App">
      <Header />
     {/* {loading ? <p>Loading ...</p> : <Map countries={countries} />} */}
      <StyledMain>
        <StyledLeftSide>
        <Chart />
     {/*     {loading ? '' : <DataAll global={global} />}
          {loading ? '' : <TableSection countries={countrJson} />}
  {loading ? "" : <DataHistorical dataHistAll={dataHistAll} />} */}
        </StyledLeftSide>
       {/* <StyledRightSide>{loading ? '' : <News news={news} />}</StyledRightSide> */}
      </StyledMain>
    </div>
  );
}

export default App;
