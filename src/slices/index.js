import { combineReducers } from 'redux'
import countriesReducer from './countries'
import globalReducer from './global'

const rootReducer = combineReducers({
    countries: countriesReducer,
    global: globalReducer
})

export default rootReducer