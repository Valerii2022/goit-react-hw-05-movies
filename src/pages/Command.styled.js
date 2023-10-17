import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 15px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1440px) {
    width: 1410px;
  }
  @media screen and (min-width: 1920px) {
    width: 1890px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  @media screen and (min-width: 360px) {
    gap: 8px;
  }
  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  font-size: 18px;
  transition: color 250ms linear;
  @media screen and (min-width: 360px) {
    width: calc((100% - 8px) / 2);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 3);
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 48px) / 4);
  }
  @media screen and (min-width: 1920px) {
    width: calc((100% - 80px) / 6);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    filter: grayscale(80%);
    transition: transform 250ms linear, filter 250ms linear;
    &:hover {
      transform: scale(1.05);
      filter: grayscale(0%);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  height: 100%;
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
