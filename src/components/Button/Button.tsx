// Generated with util/create-component.js
import React from "react";
import Theme from "../../Theme";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.style";

const Button: React.FC<ButtonProps> = ({ mode }) => (
  <Theme>
    <StyledButton
      data-testid="test-button"
      mode={mode}
      className={`test-button-${mode}`}
    >
      <button>Test button..!</button>
    </StyledButton>
  </Theme>
);

export default Button;
