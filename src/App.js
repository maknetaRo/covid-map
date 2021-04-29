import './App.css';
import Map from './components/Map'
import DataAll from './components/DataAll'

import useFetch from './useFetch';

function App() {



const url = 'https://disease.sh/v3/covid-19/countries'
const { countries } = useFetch(url)
console.log(countries)
  return (
    <div className="App">
   
   
    <Map countries={countries} /> 
  <DataAll  />
    </div>
  );
}

export default App;
