import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  color: black;
  margin-right: 20px;
  text-decoration: none;
  &.active {
    color: #0070ba;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const PageHeader = styled.header`
  box-shadow: 0 2px 8px #8e8e8e;
`;
