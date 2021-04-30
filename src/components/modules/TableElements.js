import styled from 'styled-components'

export const StyledTable = styled.table`
    display: table;
    position: absolute;
    /* border-collapse: collapse; */
    margin: 1.5rem;
    font-size: 0.9rem;
    font-family: sans-serif;
    /* table-layout: fixed; */
    width: 100%;
    white-space: nowrap;
    padding: 1rem;
    height: 480px;
    overflow:scroll;
`;

export const StyledThead = styled.thead`
    background-color: blueviolet;
    
    text-align: left;

    
`;

export const StyledTrow = styled.tr`
    padding: 0.75rem;
`;