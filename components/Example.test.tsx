import { Example } from "./Example";
import { render, screen } from "@testing-library/react";

import '@testing-library/jest-dom'

describe("Example", () => {
  it("Verify if texts are to be displayed", () => {
    render(<Example />);
    // check with test id
    expect(screen.getByTestId("Example")).toBeInTheDocument();
    expect(screen.getByTestId("Example")).toHaveTextContent("Sample");

    // check by text
    expect(screen.getByText("Sample components")).toBeTruthy();
  });
});
