import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 63px;
`;

export const ButtonSelect = styled.button`
  all: unset;
  width: 98px;
  transition: 0.3s;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  text-align: center;
  border: 1px solid ${(props) => (props.actived ? "#1797ff" : "#d6d6d6")};
  color: ${(props) => (props.actived ? "#1797ff" : "#606060")};
  z-index: 1;
  position: relative;
  cursor: pointer;
  &:first-child {
    border-radius: 2px 0px 0px 2px;
    z-index: 0;
    right: 1px;
    left: 1px;
  }
  &:last-child {
    border-radius: 0px 2px 2px 0px;
  }
`;