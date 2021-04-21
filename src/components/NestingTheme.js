import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles((theme) => ({
  root: {
    background: theme.background,
    color: 'white',
    '&:hover': {
      background: theme.background,
    },
  },
}))(Button);

const outerTheme = createMuiTheme({
  background: 'dodgerblue',
});

const innerTheme = createMuiTheme({
  background: 'gold',
});

const NestingTheme = () => {
  return (
    <div>
      <ThemeProvider theme={outerTheme}>
        <StyledButton>클릭</StyledButton>
        <ThemeProvider theme={innerTheme}>
          <StyledButton>클릭</StyledButton>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default NestingTheme;
