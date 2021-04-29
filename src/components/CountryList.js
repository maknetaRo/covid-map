import React from 'react'

const CountryList = (props) => {
 
    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Localization</th>
                    <th>All Cases</th>
                    <th>Today Cases</th>
                    <th>Today Deaths</th>
                    <th>Deaths</th>
                    <th>Deaths Per Million</th>
                </tr>
            </thead>
                    
            {props.countries ? props.countries.features.map(place => {
            const { coordinates } = place.geometry    
            const { flag, _id }     = place.properties.countryInfo
           
            const { country, cases, deaths, deathsPerOneMillion, todayCases, todayDeaths, todayRecovered, updated } = place.properties;
            let date = new Date(updated)
            return (
        
            <tbody>
                <tr key={_id}>
                    <td scope="row"> <img src={flag} style={{width: "30px", height: "auto"}} /> {country} </td>
                    <td  >{cases}</td>
                    <td >{todayCases}</td>
                    <td >{todayDeaths}</td>
                    <td >{deaths}</td>
                    <td >{deathsPerOneMillion}</td>
                </tr>
            </tbody>
            )
        })
            : null} 
            
       
        </table>
    )
}

export default CountryList
