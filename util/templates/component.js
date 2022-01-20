module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import Theme from "../../Theme";
import { ${componentName}Props } from "./${componentName}.types";
import { Styled${componentName} } from "./${componentName}.style";

const ${componentName}: React.FC<${componentName}Props> = ({ mode }) => (
  <Theme>
    <Styled${componentName} data-testid="test-${componentName.toLowerCase()}" mode={mode}>
      <h1>Hi, welcome to SOAL!</h1>
    </Styled${componentName}>
  </Theme>
);

export default ${componentName};
`,
  extension: `.tsx`,
});
