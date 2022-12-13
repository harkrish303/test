import React from 'react'

export default function ListEx() {

    const cars=["audi","BMW","Rolls","Benze"];
    //const listcars=cars.map((i)=>i);
    //console.log(listcars);
  return (
    <h1>
        {cars.map(
            (val,index)=><li key={index}>{val}</li>)}
    </h1>
  )
}