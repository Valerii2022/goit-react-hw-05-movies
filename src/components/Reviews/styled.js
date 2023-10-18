import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  padding: 16px;
  border: 1px solid #8e8e8e;
  border-radius: 4px;
  box-shadow: 0 0 4px #8e8e8e;
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
  & span {
    font-weight: 400;
  }
`;
