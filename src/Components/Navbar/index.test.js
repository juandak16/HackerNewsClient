import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "./index";

describe("Navbar", () => {
  test("should render the Navbar component", () => {
    render(<Navbar />);
  });
});
