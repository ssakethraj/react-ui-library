import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {}

const theme = {
  colors: {
    pink: "#f04d4d",
    green: "#3eb05a",
    blue: "#4662ad",
    yellow: "#e8af21",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
