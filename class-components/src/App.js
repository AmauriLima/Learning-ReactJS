import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const ThemeContext = createContext();

class App extends React.Component {
  state = {
    theme: JSON.parse(localStorage.getItem('theme')),
  }

  handleToggleTheme = () => {
    this.setState(prevState => {
      localStorage.setItem('theme', 
        JSON.stringify(prevState.theme === 'dark' ? 'light' : 'dark')
      );

      return(
        { theme: prevState.theme === 'dark' ? 'light' : 'dark' }
      )
    });
  }

  render() {
    const { theme } = this.state;

    return(
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle/>
        <ThemeContext.Provider
          value={{ 
            onToggleTheme: this.handleToggleTheme,
            selectedTheme: theme,
          }}
        >
          <Layout
            onToggleTheme={this.handleToggleTheme}
            selectedTheme={theme}
          />
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;