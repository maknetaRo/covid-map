import React from 'react';
import styled from 'styled-components';
import { SubtitleGrid, LargeNums } from './Titles';

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

const GridElem = (props) => {
  return (
    <StyledGridElem>
      <SubtitleGrid>{props.titles}: </SubtitleGrid>
      <LargeNums>{props.numbers}</LargeNums>
    </StyledGridElem>
  );
};

export default GridElem;
