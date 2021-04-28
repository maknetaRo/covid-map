import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchGlobal, globalSelector} from '../slices/global'

const AllData = () => {
    const dispatch = useDispatch()
    const {global, loading, hasErrors} = useSelector(globalSelector)   
    console.log("Global: ", global)

    useEffect(() => {
      dispatch(fetchGlobal())
    }, [dispatch])

    const renderData = () => {
      if (loading) return <p>Loading data...</p>
      if (hasErrors) return <p>Unable to display data.</p>
      
          const { cases, critical, deaths, recovered, population, tests, todayCases, todayDeaths, todayRecovered, updated} = global
          let date = new Date(updated)
          return (
              
              <article>
              <p>Cases: {cases}</p>
              <p>Critical: {critical}</p>
              <p>Deaths: {deaths}</p>
              <p>Recoverd: {recovered}</p>
              <p>{date.toLocaleDateString()}</p>
              </article>
              
          )
      }
   
    return (
              
        
            <section className="box global"> 
                {renderData()}
              
                          
            </section>
   
    )
}

export default AllData
