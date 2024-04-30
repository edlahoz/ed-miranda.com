import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import H3 from "./H3";

describe("<H3 />", () => {
  test("it should mount", () => {
    render(<H3 />);

    const h3 = screen.getByTestId("H3");

    expect(h3).toBeInTheDocument();
  });
});
