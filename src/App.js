import './App.css';
import Map from './components/Map'
import DataAll from './components/DataAll'
import Header from './components/Header'
import CountryList from './components/CountryList'
import ListTable from './components/ListTable'

import useFetch from './useFetch'


function App() {

  const urls = [
    'https://disease.sh/v3/covid-19/countries',
    'https://disease.sh/v3/covid-19/all',
    'https://disease.sh/v3/covid-19/historical?lastdays=30',
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30'
  ]

const { countries, global, dataHistorical, dataVaccine, loading, error } = useFetch(urls)
console.log(countries)

     
if (error) return <p>Error!</p>;

  return (
    <div className="App">
    <Header />
    {loading ? <p>Loading ...</p> :  <Map countries={countries} /> }
   
    {/*{loading ? <p>Loading ...</p> : <DataAll global={global} /> }*/} 
    {loading ? "" : <ListTable countries={countries} /> }
    {/*{loading ? null : <CountryList countries={countries} /> } */}
   
    </div>
  );
}

export default App;
