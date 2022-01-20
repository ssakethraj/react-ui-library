// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      mode: "dark",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have dark className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-button");

    expect(testComponent).toHaveClass("test-button-dark");
  });

  it("should have white className with mode set as white", () => {
    props.mode = "white";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-button");

    expect(testComponent).toHaveClass("test-button-white");
  });
});
