import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  padding: 16px;
  border: 1px solid #8e8e8e;
  border-radius: 3px;
  box-shadow: 0 0 4px #8e8e8e;
  display: flex;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 480px) {
    width: calc((100% - 8px) / 2);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 3);
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 24px) / 4);
  }
  @media screen and (min-width: 1920px) {
    width: calc((100% - 40px) / 6);
  }
`;

export const NameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-weight: 500;
  & span {
    font-weight: 400;
  }
`;
