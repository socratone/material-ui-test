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
    color: (props) => props.color === 'white' ? 'white' : 'black',
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
      <h1>NESTING THEME</h1>
      <ThemeProvider theme={outerTheme}>
        <StyledButton color="default">클릭</StyledButton>
        <ThemeProvider theme={innerTheme}>
          <StyledButton>클릭</StyledButton>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default NestingTheme;
