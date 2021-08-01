import React, { useContext } from 'react';
import { ThemeContext } from '../../App'

import { Container } from './styles';

export default function Header() {
  const theme = useContext(ThemeContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={theme.onToggleTheme}>
        {theme.selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
};