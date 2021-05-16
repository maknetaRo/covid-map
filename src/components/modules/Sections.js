import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 65% 35%; 
  margin: auto;
  justify-content: space-around;
  margin-left: 3%;
  margin-right: 3%;
  
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



export const DateRow = styled.article`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
`;
