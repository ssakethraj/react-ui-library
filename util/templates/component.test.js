module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      mode: "dark",
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render SOAL text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("test-${componentName.toLowerCase()}");

    expect(component).toHaveTextContent("Hi, welcome to SOAL!");
  });
});
`,
  extension: `.test.tsx`,
});
