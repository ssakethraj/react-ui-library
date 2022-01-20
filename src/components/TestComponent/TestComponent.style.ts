// Generated with util/create-component.js
import styled from "styled-components";

interface StyledProps {
  mode: string;
}

export const StyledTestComponent = styled.div<StyledProps>`
  color: ${(props) => props.theme.colors.green};
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;

  ${(props) =>
    props.mode === "dark" &&
    `background-color: black;
    color: white;`}
`;
