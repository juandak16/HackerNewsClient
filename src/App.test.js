import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

describe("App", () => {
  test("renders the App component", () => {
    render(<App />);
  });
});
