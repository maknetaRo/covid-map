import { useState, useEffect } from 'react';


const useFetch = (urls) => {
    const [data, setData] = useState(null);
    const [dataAll, setDataAll] = useState(null);
    const [dataHistorical, setDataHistorical] = useState(null)
    const [dataVaccine, setDataVaccine] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);   
    
    useEffect(() => {
       const fetchData = async () => {       
            setLoading(true);
            
            Promise.all([
                fetch(urls[0]),
                fetch(urls[1]),
                fetch(urls[2]), 
                fetch(urls[3])
            ]).then(async([res1, res2, res3, res4]) => {
                const countriesJson = await res1.json()
                // const allJson = await res2.json
                const historicalJson = await res3.json()
                const vaccineJson = await res4.json()
                const geoJson = {
                    type: "FeatureCollection",
                    features: countriesJson.map((country = {}) => {
                        const { countryInfo = {}} = country;
                        const { lat, long: lng} = countryInfo;
                        return {
                            type: "Feature",
                            properties: {
                                ...country,
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [lat, lng]
                            }
                        }
                    })
                }
                setData(geoJson)
                console.log(geoJson)
                setLoading(false)
                
                // // setDataAll(allJson)  
                // // console.log(allJson)
                // setDataHistorical(historicalJson) 
                // console.log(historicalJson)    
                // setDataVaccine(vaccineJson)
                // console.log(vaccineJson)
                
            })
            .catch (error => {
                console.log(`Failed to fetch countries: ${error.message}`, error)
                setError(error)          
               
            });
        
       } 
       fetchData() 
    }, [urls])
    return { data, dataAll, dataHistorical, dataVaccine, loading, error}
    }

    export default useFetch;