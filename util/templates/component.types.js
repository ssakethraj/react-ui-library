module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export interface ${componentName}Props {
  mode: "dark" | "white";
}
`,
  extension: `.types.ts`,
});
