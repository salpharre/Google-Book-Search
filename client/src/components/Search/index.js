import React from "react";

// This file exports the Input component

function Search(props) {
  return (
    <div className="form-group">
      <input 
      className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      type="text"
      placeholder="Enter Search Word"
       />
    </div>
  );
};

export default Search;