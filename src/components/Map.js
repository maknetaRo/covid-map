import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

import {useDispatch, useSelector} from 'react-redux'
import {fetchCountries, countriesSelector} from '../slices/countries'


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

    const dispatch = useDispatch()
    const {countries, loading, hasErrors} = useSelector(countriesSelector)   
    console.log(countries)

    useEffect(() => {
      dispatch(fetchCountries())
    }, [dispatch])

    const renderData = () => {
      if (loading) return <p>Loading data...</p>
      if (hasErrors) return <p>Unable to display data.</p>
      
      return countries.features.map(place => {
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
    }

    return (     
      <MapContainer className="map" 
      center={center_position} zoom={zoom} scrollWheelZoom={false}      
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
     </MapContainer>
     
        
    )
}



export default Map
