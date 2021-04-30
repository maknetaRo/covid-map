import React from 'react'
import CountryList from './CountryList'


const ListTable = (props) => {
    return (
        <section 
        style={{width: "800px",
         padding: "2rem", 
         border: "1px solid black", 
         margin: "2rem auto"}}>
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
