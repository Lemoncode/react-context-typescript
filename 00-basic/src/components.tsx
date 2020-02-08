import * as React from "react";
import { ThemeContext } from "./theme-context";

const D = () => (
  <ThemeContext.Consumer>
    {value => <h4 style={{ color: value }}>D component</h4>}
  </ThemeContext.Consumer>
);

const C = () => (
  <>
    <h4>C component</h4>
    <D />
  </>
);

const B = () => <h4>B Component</h4>;

export const A = () => (
  <ThemeContext.Provider value="green">
    <h4>A component</h4>
    <B />
    <C />
  </ThemeContext.Provider>
);
