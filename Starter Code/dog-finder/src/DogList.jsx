
import React from "react";
import { Link } from "react-router-dom";

function  DogList( { dogs }) {
    return (
        <div className="DogList">
            <h1> Dog List </h1>
            <div>
                {dogs.map(d => (
                    <Link to={`/dogs/${d.name.toLowerCase()}`}> {d.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default DogList;