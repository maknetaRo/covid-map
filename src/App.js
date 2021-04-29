import { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map'
import DataAll from './components/DataAll'
import Header from './components/Header'
import useFetch from './useFetch'


function App() {

  // const urls = [
  //   'https://disease.sh/v3/covid-19/countries',
  //   'https://disease.sh/v3/covid-19/all',
  //   'https://disease.sh/v3/covid-19/historical?lastdays=30',
  //   'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30'
  // ]

// const { countries, global, dataHistorical, dataVaccine, loading, error } = useFetch(urls)

     
// if (error) return <p>Error!</p>;
// if (loading) return <p>Loading...</p>;

const url = 'https://disease.sh/v3/covid-19/countries'
const { countries } = useFetch(url)
console.log(countries)
  return (
    <div className="App">
    <Header />
   
   
    <Map countries={countries} /> 
    <DataAll   />
    </div>
  );
}

export default App;
