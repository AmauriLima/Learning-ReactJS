import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: JSON.parse(localStorage.getItem('theme'))
  }

  handleToggleTheme = () => {
    this.setState(prevState => {    
      localStorage.setItem('theme', JSON.stringify(
        prevState.theme === 'dark' ? 'light' : 'dark'
      ))
      return (
        {theme: prevState.theme === 'dark' ? 'light' : 'dark'}
      )
    });
  }

  render() {
    return(
      <ThemeContext.Provider
        value={{
          theme:this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}