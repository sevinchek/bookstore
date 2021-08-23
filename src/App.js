import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Books from './components/Books';
import Categories from './components/Categories';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul className="navItems">
            <li className="navItem">
              <Link className="logo" to="/">
                <h1>Bookstore CMS</h1>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/">BOOKS</Link>
            </li>
            <li className="navItem">
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
          <button type="button">
            <FaUser />
          </button>
        </nav>
      </header>

      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
