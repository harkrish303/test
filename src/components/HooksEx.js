import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    //let inc=()=>{setCount(count+1)}
    useEffect(()=>{
      document.title="SSP";
      console.log({count})
      setCount(count+0)
    })
    return (
    <div>
        <h1>{count}</h1>
        <hr/>
        <button onClick={()=>{setCount(count+1)}}>ADD ONE</button>
        <br/>
        <button onClick={()=>{setCount(count-1)}}>LESS ONE</button>
        <br/>
        <button onClick={()=>{setCount(count+5)}}>ADD FIVE</button>
        <br/>
        <button onClick={()=>{setCount(count-5)}}>LESS FIVE</button>
    </div>
  )
}

export default HooksEx