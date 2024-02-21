import React, { useState } from 'react';
import "../assets/selection.css";

const Selection = () => {
  
  const [size, setSize] = useState();
  const [elements, setElements] = useState();
  const [arr,setArr] = useState([]);
  const [color,setColor]=useState(); 

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
      selectionSort(newArr);
    }
  }

  const selectionSort = async(array)=>{
    const arrLength=array.length;
    const newArr=[...array];
    for(let i=0;i<arrLength-1;i++)
    {
      let minIndex=i;
      for(let j=i+1;j<arrLength;j++)
      {
        setColor([minIndex, j]);
        await new Promise(resolve => setTimeout(resolve, 800));
        if(newArr[j]<newArr[minIndex])
        {
          minIndex=j;
        }
      }
      if(minIndex !== i)
      {
        let temp=newArr[i];
        newArr[i]=newArr[minIndex];
        newArr[minIndex]=temp;
      }
      setColor([]);
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
              const bgColor = color && (color[0] === index || color[1] === index) ? 'green' : '';
              return <div key={index} className="box" style={{ backgroundColor: bgColor }}>{value}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Selection;
