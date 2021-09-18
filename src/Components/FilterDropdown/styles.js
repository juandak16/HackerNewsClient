import styled from "styled-components";
import Select from "react-select";

const colors = {
  grayDark: '#2e2e2e',
  gray: '#979797',
  grayLight: '#eaeaea',
  white: '#fff'
}

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
    border: isFocused ? `1px solid ${colors.grayDark}` : `1px solid ${colors.gray}`,
    boxShadow: "none",
    borderRadius: "4px",
    div: {
      color: isFocused ? colors.grayDark : colors.gray,
    },
    span: {
      display: "none"
    },
    ':hover': {
      border: `1px solid ${colors.grayDark}`,
      boxShadow: "none",
      color: colors.grayDark,
      div: {
        color: colors.grayDark,
      },
    }
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    ':hover': {
      backgroundColor: colors.grayLight
    },
    backgroundColor: isSelected ? colors.grayLight : colors.white,
  }),
};