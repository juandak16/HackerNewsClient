import React from "react";
import { render, screen } from "@testing-library/react";
import { TabSelector } from "./index";

const TabSelectorMock = {
  tabActived: "all",
  setTabActived: jest.fn(),
}

describe("TabSelector", () => {
  test("should render the TabSelector component", () => {
    render(
      <TabSelector
        tabActived={TabSelectorMock.tabActived}
        setTabActived={TabSelectorMock.setTabActived}
      />
    );

    expect(screen.getByTestId("home-tab-selector")).toBeInTheDocument();
  });
});
