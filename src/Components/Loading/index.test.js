import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "./index";

describe("Loading", () => {
  test("should render the Loading component", () => {
    render(<Loading />);
  });
});

