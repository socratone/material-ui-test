import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <NavItem path="/">Home</NavItem>
        </Nav>
        <Main>
          <Switch>
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
