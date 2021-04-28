import React from 'react'

const DataAll = (props) => {
    console.log("Pros: ", props.global)
    // const {cases, deaths, critical, recovered, tests, todayCases, todayDeaths, todayRecovered, updated } = props.global
    // const date = new Date(updated)
    const cases = 149754711
    const deaths = 3154570
    const critical = 110929 
    const recovered = 127810686
    const tests = 2155637320
    const todayCases = 428224
    const todayDeaths = 6355
    const todayRecovered = 352617
    const date = new Date(1619628585976)

  

    return (
        <article>
              <p>Cases: {cases.toLocaleString().replace(/,/gi, " ")}</p>
              <p>Critical: {critical.toLocaleString().replace(/,/gi, " ")}</p>
              <p>Deaths: {deaths.toLocaleString().replace(/,/gi, " ")}</p>
              <p>Recoverd: {recovered.toLocaleString().replace(/,/gi, " ")}</p>
              <p>{date.toLocaleDateString()}</p>
        </article>
    )
}

export default DataAll

