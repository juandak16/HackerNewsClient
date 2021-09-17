import React from "react";
import { render } from "@testing-library/react";
import { Error } from "./index";

describe("Error", () => {
  test("should render the Error component", () => {
    render(<Error />);
  });
});

