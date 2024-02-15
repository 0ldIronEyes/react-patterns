
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({addColor}) {

    const [color, setColor] = useState();
    const nav = useNavigate();

    const handleChange = (event) => {
        setColor(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        addColor(color);
        nav("/colors");
      };

    return(
        <div>
        <h2>Color Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter a color:
            <input
              type="text"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Color</button>
        </form>
      </div>
    )
}

export default ColorForm