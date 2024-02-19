import React, { useState } from 'react';
import "../assets/selection.css";

const Selection = () => {
  
  const [size, setSize] = useState();
  const [elements, setElements] = useState();
  const [arr,setArr] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [sortingIndex, setSortingIndex] = useState(0);

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

  const swapper = ()=>{

  }

  const selectionSort = (array)=>{
    const arrLength=array.length;
    const newArr=[...array];
    for(let i=0;i<arrLength-1;i++)
    {
      let minIndex=i;
      for(let j=i+1;j<arrLength;j++)
      {
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
    }
    setSortedArr([...newArr]);
    setSortingIndex(arrLength);
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
              return <div className="box">{value}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Selection;