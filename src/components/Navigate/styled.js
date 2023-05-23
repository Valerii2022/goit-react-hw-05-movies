import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 20px;
  &.active {
    color: red;
  }
`;
