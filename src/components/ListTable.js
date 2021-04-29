import React from 'react'
import CountryList from './CountryList'


const ListTable = (props) => {
    return (
        <section>
            <h2>Statistics</h2>
            <div>
            <button>Cases</button>
            <button>Vaccines</button>
            </div>
            <CountryList  countries={props.countries} />

            
        </section>
    )
}

export default ListTable
