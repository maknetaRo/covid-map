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

    const urls = [
        'https://disease.sh/v3/covid-19/countries',
        'https://disease.sh/v3/covid-19/all',
        'https://disease.sh/v3/covid-19/historical?lastdays=30',
        'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30'
      ]

    const url = 'https://disease.sh/v3/covid-19/countries',
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
      {data ? data.features.map(place => {
        const { coordinates } = place.geometry        
        const { country, cases, deaths, recovered, todayCases, todayDeaths, todayRecovered, updated } = place.properties;

        let date = new Date(updated)

        return (
        <Marker icon={redIcon} position={coordinates} key={place.properties.country}>
        <Popup  >
          <h2>{country}</h2>
          <p><strong>Cases:</strong> {cases} | <strong>Cases Today:</strong> {todayCases}</p> 
          <p><strong>Deaths:</strong> {deaths} | <strong>Death Today:</strong> {todayDeaths}</p>
          <p><strong>Recovered:</strong> {recovered} | <strong>Recovered Today:</strong> {todayRecovered}</p>
          <p><strong>Last Update:</strong> {date.toLocaleDateString()}</p>
        </Popup>
        </Marker>
        )
      })
    : null}
       
     </MapContainer>
     
        
    )
}

export default Map
