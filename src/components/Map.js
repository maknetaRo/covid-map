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
    const position = [51.9194, 19.1451]
    const zoom = 1.5

    const url = 'https://corona.lmao.ninja/v2/countries'
    const { data, loading, error } = useFetch(url)
    console.log(data)
  
    return (

      <React.Fragment>
      { loading && <p>{loading}</p>}
            
      { error && <p>{error}</p>}
      

      <MapContainer className="map" 
      center={position} zoom={zoom} scrollWheelZoom={false}
      
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={redIcon} position={position}>
        <Popup>
          Somewhere in the middle of <br /> Poland.
        </Popup>
      </Marker>
    </MapContainer>
      
      </React.Fragment>
        
       
            
        
    )
}

export default Map
