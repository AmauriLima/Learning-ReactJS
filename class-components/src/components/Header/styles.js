import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor} ;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    font-size: ${({ theme }) => theme.spacing.medium}px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;