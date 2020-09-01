import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <button type="button" class="btn btn-danger" {...props}>Delete</button>
  );
}

export function ViewBtn(props) {
  return (
    <button type="button" className="btn btn-info" {...props}>View</button>
  );
};

export function FavoriteBtn(props) {
  return (
    <button type="button" className="btn btnPurple" {...props}>Favorite</button>
  );
}
