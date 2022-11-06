import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class NameContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  render() { 
    return (
      <NameContextProvider.Provider .Provider value={{...this.state}}>
        {this.props.children}
      </NameContextProvider.Provider>
    );
  }
}
 
export default NameContextProvider;