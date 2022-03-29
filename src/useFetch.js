import { useState, useEffect } from 'react';

const useFetch = (urls) => {
  const [countries, setCountries] = useState(null);
  const [countrJson, setCountrJson] = useState(null);
  const [global, setGlobal] = useState(null);
  const [dataHistorical, setDataHistorical] = useState(null);
  const [dataVaccine, setDataVaccine] = useState(null);
  
  const [dataHistAll, setDataHistAll] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const links = urls;
      console.log(links);
      setLoading(true);
      try {
        const res = await Promise.all(links.map((url) => fetch(url)));
        const data = await Promise.all(res.map((r) => r.json()));

        const geoJson = {
          type: 'FeatureCollection',
          features: data[0].map((country = {}) => {
            const { countryInfo = {} } = country;
            const { lat, long: lng } = countryInfo;
            return {
              type: 'Feature',
              properties: {
                ...country,
              },
              geometry: {
                type: 'Point',
                coordinates: [lat, lng],
              },
            };
          }),
        };

        setCountries(geoJson);
        setCountrJson(data[0]);
        setGlobal(data[1]);
        setDataHistorical(data[2]);
        setDataVaccine(data[3]);
       
        setDataHistAll([data[5]])
        setLoading(false);
      } catch (error) {
        console.log(`Failed to fetch data: ${error.message}`, error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {
    countries,
    countrJson,
    global,
    dataHistorical,
    dataVaccine,
    
    dataHistAll,
    loading,
    error,
  };
};

export default useFetch;
