import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    global: []
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        getGlobal: (state) => {
            state.loading = true
        },
        getGlobalSuccess: (state, {payload}) => {
            state.global = payload 
            state.loading = false
            state.hasErrors = false 
        },
        getGlobalFailure: (state) => {
            state.loading = false 
            state.hasErrors = true 
        },
    },
})

export const {getGlobal, getGlobalSuccess, getGlobalFailure} = globalSlice.actions

export const globalSelector = (state) => state.global

export default globalSlice.reducer 

export function fetchGlobal() {
    return async (dispatch) => {
        dispatch(getGlobal())

        try {
            const response = await fetch('https://disease.sh/v3/covid-19/all')
            const json = await response.json() 
            console.log(json)
            dispatch(getGlobalSuccess(json))
        } catch (error) {
            dispatch(getGlobalFailure)
        }
        
    }
}