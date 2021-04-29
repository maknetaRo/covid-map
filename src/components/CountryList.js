import React from 'react'

const CountryList = (props) => {
 
    return (
        <ul>
       {props.countries.features.map(place => {
            const { coordinates } = place.geometry        
            const { country, cases, deaths, recovered, todayCases, todayDeaths, todayRecovered, updated } = place.properties;
            let date = new Date(updated)
            return (
                <li>{country} | {cases} |  {deaths} |  {recovered} </li>
            )
        })
    } 
            
        </ul>
    )
}

export default CountryList
