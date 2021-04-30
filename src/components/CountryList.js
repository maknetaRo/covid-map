import React from 'react'
import {StyledTable, StyledThead, StyledTrow} from './modules/TableElements'

const CountryList = (props) => {
 
    return (
      

        <section style={{display: "table", overflow: "scroll", height: "480px"}}>
            <header style={{display: "table-row"}}>
               
                    <div style={{display: "table-cell"}}>Localization</div>
                    <div style={{display: "table-cell"}}>All Cases</div>
                    <div style={{display: "table-cell"}}>Today Cases</div>
                    <div style={{display: "table-cell"}}>Today Deaths</div>
                    <div style={{display: "table-cell"}}>Deaths</div>
                    <div style={{display: "table-cell"}}>Deaths Per Million</div>
              
            </header>
           
                    
            {props.countries ? props.countries.features.map(place => {
            const { coordinates } = place.geometry    
            const { flag, _id }     = place.properties.countryInfo
           
            const { country, cases, deaths, deathsPerOneMillion, todayCases, todayDeaths, todayRecovered, updated } = place.properties;
            let date = new Date(updated)
            return (
        
           
                <div style={{display: "table-row"}} key={_id}>
                    <div style={{display: "table-cell"}}> <img src={flag} style={{width: "30px", height: "auto"}} /> {country} </div>
                    <div style={{display: "table-cell"}}>{cases}</div>
                    <div style={{display: "table-cell"}} >{todayCases}</div>
                    <div style={{display: "table-cell"}}>{todayDeaths}</div>
                    <div style={{display: "table-cell"}}>{deaths}</div>
                    <div style={{display: "table-cell"}}>{deathsPerOneMillion}</div>
                </div>
            
            )
        })
            : null} 
            
      
        </section>
      
    )
}

export default CountryList
