import React from "react";

// This file exports the Input component

export function Search(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
