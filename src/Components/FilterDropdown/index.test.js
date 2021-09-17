import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FilterDropdown } from "./index";

//import utils data
import { newsType } from '../../Views/Home/utils';

const FilterDropdownMock = {
  typeSelected: "",
  disable: false,
  manageFilter: jest.fn(),
  options: newsType,
}

describe("FilterDropdown", () => {
  test("should render the FilterDropdown component", () => {
    render(
      <FilterDropdown
        typeSelected={FilterDropdownMock.typeSelected}
        disable={FilterDropdownMock.disable}
        manageFilter={FilterDropdownMock.manageFilter}
        options={FilterDropdownMock.options}
      />
    );

    expect(screen.getByText("Select your news")).toBeInTheDocument();
  });
});

