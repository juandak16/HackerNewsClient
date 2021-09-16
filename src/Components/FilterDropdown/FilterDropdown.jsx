import React from 'react';

//Custom Styled Components
import { Container, Dropdown, StylesSelect } from './styles';

export const FilterDropdown = (props) => {
  const { typeSelected, setTypeSelected, options } = props;

  console.log('typeSelected: ', typeSelected);
  const handleDropdown = (data) => {
    console.log(data);
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
      />
    </Container>
  )
}