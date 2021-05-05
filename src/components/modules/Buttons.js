import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  border: 1px solid;
  border-color: ${(props) => (props.primary ? '#1a73e8' : '#e8eaed')};
  line-height: 1;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#e8f0fe' : 'transparent')};
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  color: ${(props) => (props.primary ? '#1967d2' : 'black')};
`;
