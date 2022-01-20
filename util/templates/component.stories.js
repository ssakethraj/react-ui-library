module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName},
};

const Template = (args) => <${componentName} {...args} />;

export const WithDark = Template.bind({});
WithDark.args = {
  mode: "dark",
};
`,
  extension: `.stories.tsx`,
});
