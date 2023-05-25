import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfoWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 10px;
`;

export const AboutMovieWrap = styled.div`
  padding: 0 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 0;
`;

export const BackLink = styled(Link)`
  border: 1px solid #8e8e8e;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  transition: color 250ms linear, background-color 250ms linear,
    border-color 250ms linear;
  &:hover,
  &.active {
    background-color: #0070ba;
    color: #fff;
    border-color: #0070ba;
  }
`;
