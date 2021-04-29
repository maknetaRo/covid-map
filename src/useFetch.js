import { useEffect, useRef, useReducer } from 'react';

const useFetch = (url) => {
    const cache = useRef({})

    const initialState = {
        status: "idle",
        error: null,
        countries: null,
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING': 
                return {...initialState, status: 'fetching'};
            case 'FETCHED': 
                return { ...initialState, status: 'fetched', countries: action.payload};
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload};
            default:
                return state;
        }
    }, initialState);
  

    useEffect(() => {
        let cancelRequest = false;
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[url]) {
                const countries = cache.current[url];
                dispatch({ type: 'FETCHED', payload: countries });
            } else {
                try {
                    const response = await fetch(url);
                    const countries = await response.json()
                    cache.current[url] = countries;
                    const geoJson = {
                        type: "FeatureCollection",
                        features: countries.map((country = {}) => {
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
    
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: geoJson });    
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message})
                }
            }
        };
        fetchData();
        return function cleanup() {
            cancelRequest = true
        }
    }, [url])

    
    return state
};

export default useFetch