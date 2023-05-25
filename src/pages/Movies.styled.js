import styled from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #000;
  &:focus-visible {
    border: 1px solid #0070ba;
    box-shadow: 0 0 2px #0070ba;
  }
`;

export const SearchBtn = styled.button`
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 3px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #fff;
    background-color: #0070ba;
    outline: none;
    border: 1px solid #0070ba;
  }
`;
