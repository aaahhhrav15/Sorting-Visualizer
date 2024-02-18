import React, { useState } from 'react';
import "../assets/selection.css";

const Selection = () => {
  
  const [size, setSize] = useState();
  const [elements, setElements] = useState();
  const [arr,setArr] = useState([]);

  const sizeChange = (event)=>{
    setSize(event.target.value);
  }
  
  const elementChange = (event)=>{
    setElements(event.target.value);
  }

  const getValues = (event)=>{
    event.preventDefault();
    console.log(size);
    console.log(elements);
    if(elements)
    {
      const newArr = elements.split(",").map(Number);
      setArr(newArr);
      console.log(arr);
    }
  }
  
  

  return (
    <div className="selection">
      <div className="features">
        <form onSubmit={getValues}>
          <div className="sizeInput">
            <label htmlFor="size">Array Size <span>(2 - 20)</span></label>
            <input type="text" name="size" id="size" onChange={sizeChange} />
          </div>
          <div className="elements">
            <label htmlFor="">Array Elements</label>
            <input type="text" name="elements" id="elements" onChange={elementChange}/>
          </div>
          <input type="submit" value="Sort"/>
        </form>
      </div>
      <div className="selectionCode">
        <div className="boxes">
          {
            arr.map((value,index)=>{
              return <div key={index} className="box">{value}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Selection;