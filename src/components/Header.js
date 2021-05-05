import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #351f39;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  z-index: 3;
  color: white;
`;

const ListElem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <ListElem>Coronavirus (COVID-19) Map</ListElem>
      <ListElem>
        <Link href="https://github.com/maknetaRo/covid-map">github</Link>
      </ListElem>
    </StyledHeader>
  );
};

export default Header;
