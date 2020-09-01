import React from "react";
import "./style.css";

export function Card({ image, title, author, description, infoLink, children }) {
    return (
        <div className="card cardParent mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} className="card-img" alt={title}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Author: {author}</p>
                        <p className="card-text">{description}</p>
                        <a href={infoLink}>
                        <button type="button" className="btn btn-info">View</button>
                        </a>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

//put {children} under view button and in with the other props

// style="max-width: 540px;