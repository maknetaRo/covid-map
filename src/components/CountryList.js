import React, {useMemo} from 'react'
import {Styles} from './modules/TableElements'
import Table from './modules/Table'



const CountryList = ({countries}) => {
    function formatLargeNums (value) {
        console.log(value.toLocaleString().replace(/,/gi, " "))
        
        return value.toLocaleString().replace(/,/gi, "")
    }
      
        const columns = useMemo(
            () => [
            {
                Header: "Cases",
                columns: [
                    {
                        Header: "",
                        accessor: "countryInfo.flag",
                        Cell: ({cell: { value } }) => <img src={value} alt="Flag" width={30} />
                    },
                    {
                        Header: "Localization",
                        accessor: "country"
                    },
                    {
                        Header: "All Cases",
                        accessor: "cases",
                        Cell: props => formatLargeNums(props.value)   
                    },
                    {
                        Header: "Today's Cases",
                        accessor: "todayCases",
                        Cell: props => formatLargeNums(props.value)  
                    },
                    {
                        Header: "All Deaths",
                        accessor: "deaths",
                        Cell: props => formatLargeNums(props.value)  
                    },
                    {
                        Header: "Deaths Per Million",
                        accessor: "deathsPerOneMillion",
                        Cell: props => formatLargeNums(props.value)  
                    },
                    {
                        Header: "Deaths Today",
                        accessor: "todayDeaths",
                        Cell: props => formatLargeNums(props.value)  
                    },
    
                ]
            }
        ], []
    
        )
           
       
        return (
            !countries ? (<p>Loading...</p>) : (
                <Styles>    
                <Table columns={columns} data={countries} />
                </Styles>
            )
          
                
            )
          
            
          
    }
    

export default CountryList
