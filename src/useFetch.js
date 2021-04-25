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
            setData(json)
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