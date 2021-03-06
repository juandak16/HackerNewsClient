import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  padding: 0 0 0 26px;
  align-items: center;
  max-width: 550px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

export const ContentLeft = styled.a`
  all: unset;
  cursor: pointer;
  width: 100%;
`;

export const ContentRight = styled.div`
  width: 68px;
  height: 100%;
  border-radius: 0 6px 6px 0;
  background-color: rgba(96,96,96,0.06);
  border: solid 1px rgba(96,96,96,0.06);;
  display: flex;
  align-items: center;
`;

export const Head = styled.div`
  margin: 14px 8px 7px 0;
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-size: 11px;
`;

export const Title = styled.p`
  margin: 6px 16px 14px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`;

export const TextDateAndAuthor = styled.p`
  margin: 0;
`;

export const ClockImage = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin: 0;
  margin-right: 8px;
`;

export const HeartImage = styled.img`
  width: 24px;
  height: 22px;
  object-fit: contain;
  margin: 0 auto;
  cursor: pointer;
`;