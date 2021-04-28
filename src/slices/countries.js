import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    countries: []
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        getCountries: (state) => {
            state.loading = true
        },
        getCountriesSuccess: (state, {payload}) => {
            state.countries = payload
            state.loading = false 
            state.hasErrors = false 
        },
        getCountriesFailure: (state) => {
            state.loading = false 
            state.hasErrors = true
        },
    },
})

export const {getCountries, getCountriesSuccess, getCountriesFailure} = countriesSlice.actions 

export const countriesSelector = (state) => state.countries

export default countriesSlice.reducer 

export function fetchCountries() {
    return async (dispatch) => {
        dispatch(getCountries())

        try {
            const response = await fetch('https://disease.sh/v3/covid-19/countries')
            const json = await response.json()
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
                            coordinates: [lat, lng]
                        }
                    }
                })
            }       
                 
            dispatch(getCountriesSuccess(geoJson))
        } catch (error) {
            dispatch(getCountriesFailure)
        }
    }
}