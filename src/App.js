import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className="comp nav">
        <ul>
          <li>
            <a href="/movies">Anchor</a>
          </li>
          <li>
            <NavLink
              exact={true}
              to="/"
              activeClassName="purple"
              activeStyle={{ fontWeight: "bold" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to="/stocks" activeClassName="purple">
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to="/movies" activeClassName="purple">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Home />
      <Stocks />
      <Movies /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/not-logged-in">
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
