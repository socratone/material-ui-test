import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffb6c1',
    },
  },
});

const StyledButton = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: #fff;
    &:hover {
      background-color: ${theme.palette.primary.main};
    }
  `}
`;

const Theme = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <h1>THEME</h1>
      <Button>DEFAULT</Button>
      <StyledButton>THEMED</StyledButton>
    </ThemeProvider>
  );
};

export default Theme;
