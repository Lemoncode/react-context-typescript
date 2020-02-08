import * as React from 'react';

export interface ThemeInfo {
  color : string;
  setColor : (color : string) => void;
}

export const ThemeContext = React.createContext<ThemeInfo>({
color: '',
setColor: () => {}
});


