import React, { useContext } from 'react';
import { ThemeContext } from '../../App'
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Header extends React.Component {
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired 
  }

  render() {
    const { onToggleTheme, selectedTheme } = this.props;
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}
