import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchBooks from "./pages/SearchedBooks";

function App() {
  return (
    <div>
      <Nav />
      <SearchBooks />
    </div>
  );
}

export default App;

//SearchBooks will be "/"
  //call api here, to searchBooks 
  //save books here, call db to save books
//SavedBooks will be "/books/:id"
  //get all saved books from db by id
  //delete saved books here

/*
<Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
*/