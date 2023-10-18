import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../icons/reshot-icon-arrow-left-CYVEH429PZ.svg';

export const MovieInfoWrap = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  @media screen and (max-width: 599px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const AboutMovieWrap = styled.div`
  @media screen and (min-width: 600px) {
    width: 60%;
  }

  @media screen and (min-width: 960px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 75%;
  }
  @media screen and (min-width: 1440px) {
    width: 80%;
  }
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`;

export const BackLink = styled(Link)`
  margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #8e8e8e;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  transition: color 250ms linear, background-color 250ms linear,
    border-color 250ms linear;
  &:hover {
    background-color: #0070ba;
    color: #fff;
    border-color: #0070ba;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const BackLinkArrow = styled(ArrowIcon)`
fill: currentColor;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 600px) {
    width: 40%;
  }
  @media screen and (min-width: 960px) {
    width: 30%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
  @media screen and (min-width: 1440px) {
    width: 20%;
  }
  @media screen and (min-width: 1920px) {
    width: 10%;
  }
`;

export const Text = styled.p`
  margin-bottom: 8px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 8px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 0;
`;

export const GenresItem = styled.li`
  line-height: 1;
  display: flex;
  gap: 4px;
  align-items: center;
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 4px;
    background-color: currentColor;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ListItem = styled.li`
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid #8e8e8e;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &.active {
    background-color: #0070ba;
    color: #f0f0f0;
  }
`;
