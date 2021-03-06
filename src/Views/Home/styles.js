import styled from "styled-components";

export const HomeContainer = styled.div`

`;

export const BodyHome = styled.div`
  box-sizing: border-box;
  margin: 0 auto! important;
  max-width: 1200px;
  padding: 0 1em;

`;

export const Text = styled.p`
  margin: 0px;
  color: #343434;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.57;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;

export const Image = styled.img`
  width: 24px;
  hwight: 24px;
  object-fit: contain;
  margin-right: 13px;
`;

export const CardsContent = styled.div`
  margin: 0 auto;
  padding: 0;
  padding-top: 38px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: fit-content;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonGetData = styled.button`
  all: unset;
  cursor: pointer;
  background-color: red;
`;

export const FooterHome = styled.footer`

`;