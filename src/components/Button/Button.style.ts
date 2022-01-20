// Generated with util/create-component.js
import styled from "styled-components";

interface StyledProps {
  mode: string;
}

export const StyledButton = styled.div<StyledProps>`
  button {
    ${(props) =>
      props.mode === "dark" &&
      `background-color: black;
    color: white;`}
  }
`;
