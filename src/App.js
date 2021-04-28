import './App.css';
import Map from './components/Map';
import CountryList from './components/CountryList';
import AllData from './components/AllData';



function App() {
//   const urls = [
//     'https://disease.sh/v3/covid-19/countries',
//     'https://disease.sh/v3/covid-19/all',
//     'https://disease.sh/v3/covid-19/historical?lastdays=30',
//     'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30'
//   ]
  
  // const url = 'https://disease.sh/v3/covid-19/countries',
 
  return (
    <div className="App">
    Hellow World
    
      <CountryList />
      <div className="main">
    
      <Map  />
  
      <AllData />
     
      </div>
      
    </div>
    
    
    
  );
}

export default App;
