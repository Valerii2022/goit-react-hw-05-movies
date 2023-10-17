import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 480px;
  margin: 0;
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ListItem = styled.li`
  width: calc((100% - 48px) / 4);
  font-size: 18px;
  transition: color 250ms linear;
`;

export const Image = styled.img`
  filter: grayscale(80%);
  width: 100%;
  transition: transform 250ms linear, filter 250ms linear;
  &:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  text-decoration: none;
  transition: color 250ms linear;
  &:hover,
  &.active {
    color: #0070ba;
  }
  // &::before {
  //   content: '';
  //   width: 6px;
  //   height: 6px;
  //   background-color: currentColor;
  // }
`;

export const BlockWrapper = styled.div`
  box-shadow: 0 2px 4px #8e8e8e;
  padding: 20px;
`;
