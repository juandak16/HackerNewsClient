import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./index";
import axios from "axios";
import { useInView } from 'react-intersection-observer';
import { useApiCall } from '../../Hooks';

jest.mock("axios");
jest.mock('react-intersection-observer');

const mockedAxios = axios;

const response = {
  loading: false,
  data: [],
  error: false,
}

jest.mock("../../Hooks/useApiCall", () => ({
  useApiCall: jest.fn(),
}));

describe("Home", () => {

  test("should render the Home component", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    useInView.mockImplementation(() => [null, true]);
    useApiCall.mockImplementation(() => (response));

    act(() => {
      render(
        <Home />
      );
    });
  });

  test("change filterdropdown", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    useInView.mockImplementation(() => [null, true]);
    useApiCall.mockImplementation(() => (response));

    act(() => {
      render(
        <Home />
      );
    });

    userEvent.click(screen.getByText('Select your news'));
    userEvent.click(screen.getByText('Reacts'));
    expect(screen.queryByText('Select your news')).toBeNull();
  });
});

