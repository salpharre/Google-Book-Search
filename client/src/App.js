import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
//To search and viewing favorited books
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <SearchBooks />
          </Route>
          <Route exact path="/books">
            <SavedBooks />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;