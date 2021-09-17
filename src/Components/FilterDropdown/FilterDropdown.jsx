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