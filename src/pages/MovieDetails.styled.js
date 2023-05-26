import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../icons/reshot-icon-arrow-left-CYVEH429PZ.svg';

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
  display: inline-flex;
  align-items: center;
  gap: 5px;
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
`;

export const BackLinkArrow = styled(ArrowIcon)`
fill: currentColor;
  }
`;
