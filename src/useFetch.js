import { useState, useEffect } from 'react';

const useFetch = (urls) => {
    const [countries, setCountries] = useState(null);
    const [global, setGlobal] = useState(null);
    const [dataHistorical, setDataHistorical] = useState(null)
    const [dataVaccine, setDataVaccine] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            const links = urls
            console.log(links)
            setLoading(true);
            try {
                const res = await Promise.all(links.map((url) => fetch(url)))
                const data = await Promise.all(res.map((r) => r.json()))

                const geoJson = {
                    type: "FeatureCollection",
                    features: data[0].map((country = {}) => {
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
                setCountries(geoJson)
                setGlobal(data[1])
                // setDataHistorical(data[2])
                // setDataVaccine(data[3])
                setLoading(false)
            } catch (error) {
                console.log(`Failed to fetch data: ${error.message}`, error)
                setError(error)
            }
       
      
        }
        fetchData()
    }, [])

    // useEffect(() => {
    //    const fetchData = async () => {
    //     setLoading(true);
    //     try {            
    //         const res = await fetch(url);
    //         const json = await res.json();
                       
    //         const geoJson = {
    //             type: "FeatureCollection",
    //             features: json.map((country = {}) => {
    //                 const { countryInfo = {}} = country;
    //                 const { lat, long: lng} = countryInfo;
    //                 return {
    //                     type: "Feature",
    //                     properties: {
    //                         ...country,
    //                     },
    //                     geometry: {
    //                         type: "Point",
    //                         coordinates: [lat, lng]
    //                     }
    //                 }
    //             })
    //         }
    //         console.log("GeoJson: ", geoJson)
    //         setCountries(geoJson)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(`Failed to fetch countries: ${error.message}`, error)
    //         setError(error)
    //     }
    //    };
    //    fetchData()
    // }, [url])
    
    return { countries, global, dataHistorical, dataVaccine, loading, error}
}

export default useFetch