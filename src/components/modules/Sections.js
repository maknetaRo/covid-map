import styled from 'styled-components'

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: fit-content(700px) 1fr;
    grid-template-rows: 1fr auto;
    max-width: 1140px;
    grid-template-areas: "chart sidebar"
                         "table sidebar";  

    @media (max-width:699px) {
        grid-template-columns: fit-content(700px);
        grid-template-areas: "chart"
                             "table"
                            "sidebar";
    }
`;

export const StyledStatSection = styled.section`
    grid-area: table;
    width: 100%;
    margin: 5%;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e8eaed;
    text-align: left;
`;

export const StyledTableSection = styled.section`
    max-width: 670px;
    padding: 2rem 1rem;
    margin: 2rem auto;
    overflow: scroll;
    height: 480px;
    

`