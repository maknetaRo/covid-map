import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       const fetchData = async () => {
        setLoading(true);
        try {            
            const res = await fetch(url);
            const json = await res.json();
                       
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
       fetchData()
    }, [url])
    return { data, loading, error}
}

export default useFetch