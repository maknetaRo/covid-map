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
            console.log(json)
            
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
                            coordinates: [lng, lat]
                        }
                    }
                })
            }
            setData(geoJson)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
       };
       fetchData()
    }, [url])
    return { data, loading, error}
}

export default useFetch