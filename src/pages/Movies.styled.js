import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  width: calc(100% - 78px);
  font-size: 18px;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #000;
  &:focus-visible {
    border: 1px solid #0070ba;
    box-shadow: 0 0 2px #0070ba;
  }
  @media screen and (min-width: 768px) {
    width: 338px;
  }
`;

export const SearchBtn = styled.button`
  width: 70px;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #0070ba;
  background-color: #e8e8e8;
  color: #0070ba;
  border-radius: 3px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #fff;
    background-color: #0070ba;
    outline: none;
  }
  :disabled {
    cursor: auto;
    border: 1px solid #8e8e8e;
    color: #8e8e8e;
    background-color: #e8e8e8;
  }
`;
