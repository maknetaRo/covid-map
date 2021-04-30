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
            <section 
            style={{maxWidth: "670px",
             padding: "2rem 1rem", 
             
             margin: "2rem 2rem",
             overflow: "scroll",
             height: "480px"
            }}>
            <CountryList  countries={props.countries} />
            </section>

            
        </section>
    )
}

export default ListTable
