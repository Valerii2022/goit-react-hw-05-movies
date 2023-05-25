import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  list-style: square;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  transition: color 250ms linear;
  &:hover {
    color: #0070ba;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: color 250ms linear;
  &:hover,
  &.active {
    color: #0070ba;
  }
`;

export const BlockWrapper = styled.div`
  box-shadow: 0 2px 4px #8e8e8e;
  padding: 20px;
`;
