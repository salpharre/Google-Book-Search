import React from "react";
import "./style.css";

//delete button
export function DeleteBtn(props) {
  return (
    <button type="button" class="btn btn-danger" {...props}>Delete</button>
  );
}
//favorite button
export function FavoriteBtn(props) {
  return (
    <button type="button" className="btn btnPurple" {...props}>Favorite</button>
  );
}
