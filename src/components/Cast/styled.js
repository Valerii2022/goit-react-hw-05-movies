import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #8e8e8e;
  border-radius: 3px;
  box-shadow: 0 2px 4px #8e8e8e;
  display: flex;
  width: 300px;
`;

export const NameInfoWrapper = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.p`
  font-weight: 500;
  & span {
    font-weight: 400;
  }
`;
