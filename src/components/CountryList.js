import React, {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {fetchCountries, countriesSelector} from '../slices/countries'

const CountryList = () => {

    const dispatch = useDispatch()
    const {countries, loading, hasErrors} = useSelector(countriesSelector)   
    console.log(countries)

    useEffect(() => {
      dispatch(fetchCountries())
    }, [dispatch])

    const renderData = () => {
      if (loading) return <p>Loading data...</p>
      if (hasErrors) return <p>Unable to display data.</p>
      
      return countries.features.map(place => {
        const { coordinates } = place.geometry        
        const { country, cases, deaths, recovered, todayCases, todayDeaths, todayRecovered, updated } = place.properties;
        console.log(country)

        let date = new Date(updated)

        return (
            <li key={country}>{country}</li>
        )
      })
    }
       
    return (
        <div>
        <h3 style={{paddingLeft: "1rem"}}>Country / Cases / Deaths</h3>
        <ul className="country-list">
           {renderData()}
        </ul>
            
        </div>
    )
}

export default CountryList;
