import React from 'react';
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';

const Map = (props) => {
  const center_position = [31.262218, 34.801472];
  const zoom = 1.5;

  const scaleRadius = (cases) => {
    let number = 6000000;
    let r = (cases / number) * 10 + 1;
    if (r < 10) {
      return 4;
    }
    return r;
  };

  return (
    <section className="map" style={{ width: '100%' }}>
      <MapContainer
        className="map"
        center={center_position}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${'makneta'}/${'ckr9r5y742gl418qxosg006ef'}/tiles/256/{z}/{x}/{y}@2x?access_token=${'pk.eyJ1IjoibWFrbmV0YSIsImEiOiJja3I5b2FpMjgwZzcxMzJxdTkya3VwMnRzIn0._BHaxKDBKFc3SnRygukKZQ'}`}
        />
        {props.countries
          ? props.countries.features.map((place) => {
              const { coordinates } = place.geometry;
              const { flag, _id } = place.properties.countryInfo;
              const {
                country,
                cases,
                deaths,
                recovered,
                todayCases,
                todayDeaths,
                todayRecovered,
                updated,
              } = place.properties;

              let date = new Date(updated);

              return (
                <CircleMarker
                  center={coordinates}
                  key={place.properties.country}
                  color={'rgba(26, 115, 232, 0.878)'}
                  fillColor={'rgba(26, 115, 232, 0.878)'}
                  fillOpacity={0.7}
                  weight={2}
                  radius={scaleRadius(cases)}
                >
                  <Popup>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={flag}
                        style={{ width: '30px', height: 'auto' }}
                      />
                      <h2>{country}</h2>
                    </div>

                    <p>
                      <strong>Cases:</strong> {cases.toLocaleString()}
                      {/*<strong>Cases Today:</strong> {todayCases}*/}
                    </p>
                    <p>
                      <strong>Deaths:</strong> {deaths.toLocaleString()}
                      {/*<strong>Death Today:</strong> {todayDeaths}*/}
                    </p>
                    {/*<p>
                      <strong>Recovered:</strong> {recovered} |{' '}
                      <strong>Recovered Today:</strong> {todayRecovered}
                   </p>*/}
                    {/*<p>
                      <strong>Last Update:</strong> {date.toLocaleDateString()}
                    </p>*/}
                  </Popup>
                </CircleMarker>
              );
            })
          : ''}
      </MapContainer>
    </section>
  );
};

export default Map;
