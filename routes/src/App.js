import React, { useState, useMemo, useRef, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  
  const firstRender = useRef(true)
  
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);
  
  
  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setTheme(JSON.parse(localStorage.getItem('theme')));
      return;
    }
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <ThemeContext.Provider
        value={{ 
          onToggleTheme: handleToggleTheme,
          selectedTheme: theme,
        }}
      >
        <Layout/>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;