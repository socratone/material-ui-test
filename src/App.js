import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Home from './components/Home';
import NestingTheme from './components/NestingTheme';

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <NavItem path="/">Home</NavItem>
          <NavItem path="/nestingtheme">NestingTheme</NavItem>
        </Nav>
        <Main>
          <Switch>
            <Route path="/nestingtheme">
              <NestingTheme />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </div>
    </Router>
  );
}

export default App;
