// Generated with util/create-component.js
import React from "react";
import Theme from "../../Theme";
import { TestComponentProps } from "./TestComponent.types";
import { StyledTestComponent } from "./TestComponent.style";

const TestComponent: React.FC<TestComponentProps> = ({ mode }) => (
  <Theme>
    <StyledTestComponent data-testid="test-testcomponent" mode={mode}>
      <h1>Hi, welcome to SOAL!</h1>
    </StyledTestComponent>
  </Theme>
);

export default TestComponent;
