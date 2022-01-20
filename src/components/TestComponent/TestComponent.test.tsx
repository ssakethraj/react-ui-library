// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";
import { TestComponentProps } from "./TestComponent.types";

describe("Test Component", () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      mode: "dark",
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it("should render SOAL text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("test-testcomponent");

    expect(component).toHaveTextContent("Hi, welcome to SOAL!");
  });
});
