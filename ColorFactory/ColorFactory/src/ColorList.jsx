import React from "react";
import { useParams } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";

function ColorList({cols}) {
    
    return (
    <>
        <div>
        <h3> Welcome to the color Factory</h3>
        <h2> <Link to={`/colors/new`}> Add a Color </Link></h2>
      </div>
      <div>
        <div> Please select a color.</div>
        <ul>
            {cols.map( c=> ( <li> <Link to={`/colors/${c.toLowerCase()}`}> {c} </Link></li>))}
        </ul>
      </div>
    </>
    )

}

export default ColorList;