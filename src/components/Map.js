import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import useFetch from '../useFetch';


const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
    const center_position = [31.262218, 34.801472]
    const zoom = 1.65

    const url = 'https://disease.sh/v3/covid-19/countries'
    const { data, loading, error } = useFetch(url)
    console.log(data)
    
   
         
    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;
  
    return (  
     
    
      

      <MapContainer className="map" 
      center={center_position} zoom={zoom} scrollWheelZoom={false}
      
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data ? data.features.map(country => {
        return (
        <Marker icon={redIcon} position={country.geometry.coordinates} key={country.properties.country}>
        <Popup>
          <h2>{country.properties.country}</h2>
          <p>Cases: {country.properties.cases}</p>
          <p>Deaths: {country.properties.deaths}</p>
          <p>Recovered: {country.properties.recovered}</p>
          <hr />
          <p>Cases Today: {country.properties.todayCases}</p>
          <p>Death Today: {country.properties.todayDeaths}</p>
          <p>Recovered Today: {country.properties.todayRecovered}</p>
        </Popup>
        </Marker>
        )
      })
    : null}
   
     
     </MapContainer>
     
        
    )
}

export default Map
