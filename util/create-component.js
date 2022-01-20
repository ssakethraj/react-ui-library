require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

const getDirectories = (source) =>
  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) {
      fs.rmdirSync(componentDirectory, { recursive: true });
      console.error(err);
    } else {
      const componentNames = files
        .filter((direct) => direct.isDirectory())
        .map((direct) => direct.name);
      const importsContent = componentNames
        .map((comp) => `import ${comp} from "./components/${comp}/${comp}";`)
        .join("\r\n");
      const exportContent = componentNames
        .map((comp) => `${comp},`)
        .join("\r\n  ");
      const content = `${importsContent}

export {
  ${exportContent}
};`;
      fs.writeFileSync("./src/index.ts", content);
      console.log(componentNames);
      console.log(
        "Successfully created component under: " + componentDirectory.green
      );
    }
  });
getDirectories("./src/components");
