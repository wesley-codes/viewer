import React, { useState } from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Utils/Theme";

interface ThemeProps {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
  theme: boolean;
}
export const Theme = ({ children, theme }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      {" "}
      {children}
    </ThemeProvider>
  );
};
