import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./Header";

describe("<Logo />", () => {
  test("it should mount", () => {
    render(<Logo />);

    const logo = screen.getByTestId("Logo");

    expect(logo).toBeInTheDocument();
  });
});
