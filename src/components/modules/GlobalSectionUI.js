import React from 'react'
import styled from 'styled-components'

export const StyledGridSection = styled.section`
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat()(2, 1fr);
    width: 100%;
    height: auto;
    background-color: white;
    color: black;
    grid-gap: 24px;
`;

export  const StyledGridElem = styled.article`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: 1px solid #dadce0;
`;


