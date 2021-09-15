import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonSelect = styled.button`
  all: unset;
  width: 98px;
  transition: 0.3s;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  text-align: center;
  border: 1px solid ${(props) => (props.actived ? "#1797ff" : "#d6d6d6")};
  color: ${(props) => (props.actived ? "#1797ff" : "#606060")};
  cursor: pointer;
`;