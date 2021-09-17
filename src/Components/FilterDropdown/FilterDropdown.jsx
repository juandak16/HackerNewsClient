import React from 'react';

//Custom Styled Components
import { Container, Dropdown, StylesSelect } from './styles';

export const FilterDropdown = (props) => {
  const { typeSelected, manageFilter, options, disable } = props;

  return (
    <Container>
      <Dropdown
        name="filter-dropdown"
        onChange={manageFilter}
        placeholder="Select your news"
        value={typeSelected}
        isSearchable={false}
        styles={StylesSelect}
        options={options}
        disable={disable}
      />
    </Container>
  )
}