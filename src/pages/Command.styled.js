import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 8px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    min-width: 448px;
  }
  @media screen and (min-width: 768px) {
    min-width: 736px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1408px;
  }
  @media screen and (min-width: 1920px) {
    min-width: 1888px;
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

export const BlockWrapper = styled.div`
  box-shadow: 0 0 4px #8e8e8e;
  border-radius: 4px;
  padding: 16px;
  &:first-child {
    margin-bottom: 16px;
  }
`;
