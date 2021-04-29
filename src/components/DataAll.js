import React, {useState, useEffect} from 'react'
import {StyledGridElem, StyledGridSection} from '../components/modules/GlobalSectionUI'

const DataAll = () => {
    const url = 'https://disease.sh/v3/covid-19/all'
    const [global, setGlobal] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
               
                setGlobal(json)
                console.log(json)
                setLoading(false)
            } catch(error) {
                console.log(`Failed to fetch global data: ${error.message}`, error)
                setError(error)
            }
        };
        fetchData()
    }, [url])
    console.log(global)
    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;
    // const [cases, deaths, critical, recovered, tests, todayCases, todayDeaths, todayRecovered, updated ] = global
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
        <StyledGridSection>
        {global}
        
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

