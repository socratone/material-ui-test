import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Home from './components/Home';
import NestingTheme from './components/NestingTheme';
import AdaptProps from './components/AdaptProps';
import StyledComponent from './components/StyledComponent';

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Nav>
          <NavItem path="/">Home</NavItem>
          <NavItem path="/nestingtheme">NestingTheme</NavItem>
          <NavItem path="/adaptprops">AdaptProps</NavItem>
          <NavItem path="/styledcomponent">StyledComponent</NavItem>
        </Nav>
        <Main>
          <Switch>
            <Route path="/nestingtheme">
              <NestingTheme />
            </Route>
            <Route path="/adaptprops">
              <AdaptProps />
            </Route>
            <Route path="/styledcomponent">
              <StyledComponent />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
    </StylesProvider>
  );
}

export default App;
