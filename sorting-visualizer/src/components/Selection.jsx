import React, { useState } from 'react';
import "../assets/selection.css";

const Selection = () => {
  
  const [size, setSize]=useState();

  const handleChange = (event)=>{
    setSize(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(size);
  }

  return (
    <div className="selection">
      <div className="features">
        <form onSubmit={handleSubmit}>
          <div className="sizeInput">
            <label htmlFor="size">Array Size <span>(2 - 20)</span></label>
            <input type="text" name="size" id="size" onChange={handleChange} />
          </div>
          <div className="elements">
            <label htmlFor="">Array Elements</label>
            <input type="text" name="elements" id="elements"/>
          </div>
          <input type="submit" value="Sort"/>
        </form>
      </div>
    </div>
  )
}

export default Selection;