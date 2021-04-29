import React from 'react'

const CountryList = (props) => {
 
    return (

        <table class="table">
            <thead>
                <tr>
                    <th>Localization</th>
                    <th>All Cases</th>
                    <th>Today Cases</th>
                    <th>Deaths Per Million</th>
                    <th>Deaths</th>
                </tr>
            </thead>
                    
            {props.countries ? props.countries.features.map(place => {
            const { coordinates } = place.geometry        
            const { country, cases, deaths, deathsPerOneMillion, todayCases, todayDeaths, todayRecovered, updated } = place.properties;
            let date = new Date(updated)
            return (
        
            <tbody>
                <tr key={country}>
                    <td scope="row">{country} </td>
                    <td>{cases}</td>
                    <td>{todayCases}</td>
                    <td>{deathsPerOneMillion}</td>
                    <td>{deaths}</td>
                </tr>
            </tbody>
            )
        })
            : null} 
            
       
        </table>
    )
}

export default CountryList
