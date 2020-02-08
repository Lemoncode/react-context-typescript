import * as React from "react";
import { ThemeContext } from "./theme-context";

const D = () => (
  <ThemeContext.Consumer>
    {value => <h4 style={{ color: value.color }}>D component</h4>}
  </ThemeContext.Consumer>
);

const C = () => (
  <>
    <h4>C component</h4>
    <D />
  </>
);

const B = () => (
  <ThemeContext.Consumer>
    {value => (
      <>
        <h4>B Component</h4>
        <button onClick={() => value.setColor("red")}>Change Theme</button>
      </>
    )}
  </ThemeContext.Consumer>
);

export const A = () => {
  const [color, setColor] = React.useState("green");
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <h4>A component</h4>
      <B />
      <C />
    </ThemeContext.Provider>
  );
};
