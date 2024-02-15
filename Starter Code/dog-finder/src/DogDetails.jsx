
import React from "react";
import { useParams } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";


function DogDetails({dogs}) {

    if (!dogs) return <Navigate to="/dogs" />

    const { name } = useParams();
    if (!name)  return <Navigate to="/dogs" />
        
    const dog = dogs.find(d =>d.name.toLowerCase() === name.toLocaleLowerCase());

    return (
        <div>
            <h1> {dog.name} </h1>
            <h3> Age: {dog.age} </h3>
            <ul>
                {dog.facts.map( f => (<li>{f}</li>))}
            </ul>
            <Link to="/dogs"> Back </Link>
        </div>
    )
}

export default DogDetails;