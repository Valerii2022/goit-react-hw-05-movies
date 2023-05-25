import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #8e8e8e;
  border-radius: 3px;
  box-shadow: 0 2px 4px #8e8e8e;
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  & span {
    font-weight: 400;
  }
`;
