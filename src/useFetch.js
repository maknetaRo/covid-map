import { useState, useEffect } from 'react';


const useFetch = (urls) => {
    const [data, setData] = useState(null);
    const [dataAll, setDataAll] = useState(null);
    const [dataHistorical, setDataHistorical] = useState(null)
    const [dataVaccine, setDataVaccine] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [url1, url2, url3, url4 ] = urls
    
    useEffect(() => {
       const fetchData1 = async () => {     
        //    console.log(url11)      
            setLoading(true);
        try {            
            const res = await fetch(url1);
            const json = await res.json()  ;            
           
                const geoJson = {
                type: "FeatureCollection",
                features: json.map((country = {}) => {
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
            setLoading(false)
        } catch (error) {
            console.log(`Failed to fetch countries: ${error.message}`, error)
            setError(error)
        }
       };
       fetchData1()
    }, [url1])

    useEffect(() => {
        const fetchData2 = async () => {        
             setLoading(true);
         try {            
             const res = await fetch(url2);
             const json = await res.json()  ;
             console.log("All")
             console.log(json)            
            setDataAll(json)    
             setLoading(false)
         } catch (error) {
             console.log(`Failed to fetch global data: ${error.message}`, error)
             setError(error)
         }
        };
        fetchData2()
     }, [url2])

     useEffect(() => {
        const fetchData3 = async () => {     
         //    console.log(url11)      
             setLoading(true);
         try {            
             const res = await fetch(url3);
             const json = await res.json()  ;
            //  console.log(json)   
            //  console.log("Historical")         
            setDataHistorical(json)    
             setLoading(false)
         } catch (error) {
             console.log(`Failed to fetch historical data: ${error.message}`, error)
             setError(error)
         }
        };
        fetchData3()
     }, [url3])

     useEffect(() => {
        const fetchData4 = async () => {     
         //    console.log(url11)      
             setLoading(true);
         try {            
             const res = await fetch(url4);
             const json = await res.json()  ;
            //  console.log(json)    
            //  console.log("Vaccine")        
            setDataVaccine(json)    
             setLoading(false)
         } catch (error) {
             console.log(`Failed to fetch vaccine coverage: ${error.message}`, error)
             setError(error)
         }
        };
        fetchData4()
     }, [url4])

    return { data, dataAll, dataHistorical, dataVaccine, loading, error}
}

export default useFetch