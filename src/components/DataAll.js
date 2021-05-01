import React from 'react'
import {StyledGridElem, StyledGridSection} from '../components/modules/GlobalSectionUI'

const DataAll = (props) => {

    const {cases, deaths, critical, recovered, tests, todayCases, todayDeaths, todayRecovered, updated } = props.global
    const date = new Date(updated)
 
    return (
        
        !props.global ? null : 
        <StyledGridSection>
        
    
        <StyledGridElem>
        <p>Cases: {cases.toLocaleString().replace(/,/gi, " ")}</p>
   
       
        </StyledGridElem>
        <p>Critical: {critical.toLocaleString().replace(/,/gi, " ")}</p>
        <p>Deaths: {deaths.toLocaleString().replace(/,/gi, " ")}</p>
             
              <p>Recoverd: {recovered.toLocaleString().replace(/,/gi, " ")}</p>
        <p>{date.toLocaleString()}</p> 

        
        </StyledGridSection>
    )
}

export default DataAll

