import React from "react";
//navbar, holds links to different pages
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">      
    <a className="navbar-brand" href="/">
      Search for Books
      </a>
      <a className="navbar-brand" href="/books">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
