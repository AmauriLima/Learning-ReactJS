import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

import { Container } from './styles';

export default function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={theme.onToggleTheme}>
        {theme.selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}