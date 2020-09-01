import React from "react";
import "./style.css";
// import {  } from "../Btn";

export function Card({ image, title, author, description, infoLink }) {
    return (
        <div className="card cardParent mb-3" style="max-width: 540px;">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} className="card-img" alt={title}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{author}</p>
                        <p className="card-text">{description}</p>
                        <button type="button" className="btn btn-info">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};