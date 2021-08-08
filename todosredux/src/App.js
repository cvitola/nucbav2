import './App.css';
import Header from './Components/Header'
import TodoPage from './Components/TodoPage';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    /*
     Este DIV se comenta, porque vamos a usar el Enrutador y cambia lo que retorna.
      <div>
        <Header />
        <TodoPage />
      </div>
    */
    <Router>
            <div style={{color: "white"}}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        );
}

export default App;

