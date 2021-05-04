import React from 'react'
import {StyledGridElem, StyledGridSection} from '../components/modules/GlobalSectionUI'

const DataAll = (props) => {
    console.log(props)
   
 
    return (       
        
    <StyledGridSection>
      {!props.global ? null : (
             <>   
             {[props.global].map((item) => {
                 console.log(item)
                 const {cases, critical, deaths, recovered, updated} = item
                 const date = new Date(updated)
                 console.log(cases)
                 return (
                    <>
                    <StyledGridElem>
                    <p>Cases: {cases.toLocaleString().replace(/,/gi, " ")}</p>
               
                   
                    </StyledGridElem>
                    <p>Critical: {critical.toLocaleString().replace(/,/gi, " ")}</p>
                    <p>Deaths: {deaths.toLocaleString().replace(/,/gi, " ")}</p>
                         
                          <p>Recoverd: {recovered.toLocaleString().replace(/,/gi, " ")}</p>
                   <p>{date.toLocaleString()}</p>
                   </>
                 )
                
             })}
        </>

        )}
    </StyledGridSection>
       
    )
}

export default DataAll

