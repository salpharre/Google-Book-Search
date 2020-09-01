import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">      
    <a className="navbar-brand" href="/">
      Search for Books
      </a>
      <a className="navbar-brand" href="/books/:id">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
