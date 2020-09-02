import React from "react";
//jumbotron, holds search input, cards, header
function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;
