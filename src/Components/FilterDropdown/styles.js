import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  width: 240px;
  height: 38px;
`;

export const Dropdown = styled(Select)`
  opacity: ${(props) => (props.disable ? '0' : '1')}

`;

export const StylesSelect = {
  control: (styles, { isFocused }) => ({
    ...styles,
    border: isFocused ? "1px solid #2e2e2e" : "1px solid #979797",
    boxShadow: "none",
    borderRadius: "4px",
    div: {
      color: isFocused ? "#2e2e2e" : "#979797",
    },
    span: {
      display: "none"
    },
    ':hover': {
      border: "1px solid #2e2e2e",
      boxShadow: "none",
      color: "#2e2e2e",
      div: {
        color: "#2e2e2e",
      },
    }
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    ':hover': {
      backgroundColor: "#eaeaea"
    },
    backgroundColor: isSelected ? "#eaeaea" : "#fff",
  }),
};