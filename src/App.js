import './App.css';
import Map from './components/Map'
import DataAll from './components/DataAll'
import Header from './components/Header'
import ListTable from './components/ListTable'

import useFetch from './useFetch'


function App() {

  const urls = [
    'https://disease.sh/v3/covid-19/countries',
    'https://disease.sh/v3/covid-19/all',
    'https://disease.sh/v3/covid-19/historical?lastdays=30',
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30'
  ]

const { countries, countrJson, global, dataHistorical, dataVaccine, loading, error } = useFetch(urls)
     
if (error) return <p>Error!</p>;

  return (
    <div className="App">
    <Header />
    {loading ? <p>Loading ...</p> :  <Map countries={countries} /> }
    <section style={{maxWidth: "1140px"}}>
     {/* {loading ? "" : <DataAll global={global} /> } */}
      {loading ? "" : <ListTable countries={countrJson} /> }
      {/*{loading ? null : <CountryList countries={countries} /> } */}
    </section>
  

   
    </div>
  );
}

export default App;
