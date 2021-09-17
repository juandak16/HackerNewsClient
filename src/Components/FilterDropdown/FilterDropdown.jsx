import React from 'react';

//Custom Styled Components
import { Container, Dropdown, StylesSelect } from './styles';

export const FilterDropdown = (props) => {
  const { typeSelected, setTypeSelected, options, disable } = props;

  const handleDropdown = (data) => {
    setTypeSelected(data);
  };


  return (
    <Container>
      <Dropdown
        name="filter-dropdown"
        onChange={handleDropdown}
        value={typeSelected}
        placeholder="Select your news"
        options={options}
        isSearchable={false}
        styles={StylesSelect}
        disable={disable}
      />
    </Container>
  )
}