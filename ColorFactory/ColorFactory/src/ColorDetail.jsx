
import React from "react";
import { useParams } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";

function ColorDetail() {

    const {name} = useParams();
    
    return(
        <div style = {{backgroundColor: name }}>
        <h1>It's {name}.</h1>
        <h1> Isn't it beautiful? </h1>
        <h1> <Link to={`/colors`}> Go Back </Link> </h1>
    
      </div>
    )
}

export default ColorDetail