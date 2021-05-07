import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 60% 40%;
  margin: auto;
  justify-content: space-evenly;
  
  @media (max-width: 789px) {
    display: flex;
    flex-direction: column;
    margin: 2%;
  }
`;

export const StyledSection = styled.section`
  max-width: 700px;
  margin: 4rem 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e8eaed;
  text-align: left;
`;

export const ChartSection = styled(StyledSection)`
  border: 0;
  border-top: 2px solid #e8eaed;
  border-radius: 0;
  padding: 2rem 0 0;
`;

export const StyledLeftSide = styled.section`
  max-width: 720px;
  margin: 3rem 0.5%;
  margin-bottom: 0;
  padding-left: 1rem;
  @media (max-width: 989px) {
    max-width: 550px;
  }
 
`;

export const StyledRightSide = styled.section`
  max-width: 570px;
  margin: 3rem 0.5%;
  padding-right: 1rem;
  @media (max-width: 789px) {
    margin-top: 0;
  }
`;

export const StyledNews = styled.section`
  padding: 1rem 0 0;
  margin: 0 auto;
  max-width: 520px;
  @media (max-width: 789px) {
    margin-top: 0;
  }
`;

export const StyledTableSection = styled.section`
  max-width: 670px;
  padding: 2rem 1rem;
  margin: 2rem auto;
  overflow: scroll;
  height: 480px;
`;

export const StyledGridSection = styled.section`
  max-width: 670px;
  padding: 1rem 0 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr) auto;
  width: 100%;
  height: auto;
  background-color: white;
  color: black;
  position: relative;
  @media (max-width: 699px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr) auto;
  }
`;

export const StyledGridElem = styled.article`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border: 1px solid #dadce0;
  margin-bottom: 0;
  position: relative;
  text-align: center;
  @media (max-width: 699px) {
    text-align: left;
  }
  

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    border-left: 0;
    border-top: 0;
    border-right: 0;
  }
  :nth-child(4),
  :nth-child(5),
  :nth-child(6) {
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
  }


  :nth-child(2),
  :nth-child(3),
  :nth-child(5),
  :nth-child(6) {
    :before {
      position: absolute;
      content: '';
      width: 1px;
      background-color: #dadce0;
      height: 60%;
      top: 20%;
      right: auto;
      bottom: 0;
      display: block;
      /* left: -24px; */
    }
  }
  @media (max-width: 699px) {
    :nth-child(1),
    :nth-child(2) {
      border-left: 0;
      border-top: 0;
      border-right: 0;
    }
    :nth-child(3),
    :nth-child(4) {
      border: 0;
    }
    :nth-child(5),
    :nth-child(6) {
      border-left: 0;
      border-bottom: 0;
      border-right: 0;
    }
    :nth-child(2),
    :nth-child(3),
    :nth-child(5),
    :nth-child(6) {
      :before {
        width: 0;
      }
    }
  }
`;

export const DateRow = styled.article`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
`;
