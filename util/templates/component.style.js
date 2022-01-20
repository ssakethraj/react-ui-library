module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import styled from "styled-components";

interface StyledProps {
  mode: string;
}

export const Styled${componentName} = styled.div<StyledProps>\`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;

  \${(props) =>
    props.mode === "dark" &&
    \`background-color: black;
    color: white;\`}
\`;
`,
  extension: `.style.ts`,
});
