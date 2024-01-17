import "./App.css";
import Map from "./components/Map";
import DataAll from "./components/DataAll";
import Header from "./components/Header";
import News from "./components/News";
import TableSection from "./components/TableSection";
import {
  StyledMain,
  StyledLeftSide,
  StyledRightSide,
} from "./components/modules/Sections";

import useFetch from "./useFetch";
import DataHistorical from "./components/DataHistorical";

function App() {
  const urls = [
    "https://disease.sh/v3/covid-19/countries",
    "https://disease.sh/v3/covid-19/all",
    "https://disease.sh/v3/covid-19/historical?lastdays=30",
    "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30",
    "https://disease.sh/v3/covid-19/historical/all?lastdays=500",
    "https://gnews.io/api/v4/search?q=health&lang=en&max=10&apikey=8b205dcda1723e2688039be8407429f4",
  ];

  const {
    countries,
    countrJson,
    global,
    dataHistorical,
    dataVaccine,
    dataHistAll,
    dataNews,
    loading,
    error,
  } = useFetch(urls);
  if (error) return <p>Error!</p>;
  console.log(dataNews);

  return (
    <div className="App">
      <Header />
      {loading ? <Map /> : <Map countries={countries} />}
      <StyledMain>
        <StyledLeftSide>
          {loading ? <DataAll /> : <DataAll global={global} />}
          {loading ? <TableSection /> : <TableSection countries={countrJson} />}
          {loading ? (
            <DataHistorical />
          ) : (
            <DataHistorical dataHistAll={dataHistAll} />
          )}
        </StyledLeftSide>
        <StyledRightSide>
          {loading ? <News /> : <News dataNews={dataNews} />}
        </StyledRightSide>
      </StyledMain>
    </div>
  );
}

export default App;
