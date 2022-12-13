import { color } from '@mui/system';
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function GetHooks() {
    const[bio,setbio]=useState([]);
    useEffect(()=>{
        axios.get("DummyData.json").then(e=>{setbio(e.data)
        })
    })
  return (
    <div>
    <h2 >Table of posts</h2>
    GetHooks
    <table> 
      <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>DOB</th>
      <th>NATIVE</th>
      </tr>
      {bio.map((post)=> 
        <tr>
        <td>{post.userId}</td>
        <td>{post.name}</td>
        <td>{post.dob}</td>
        <td>{post.native}</td>
        </tr>
        )}
        </table>
    </div>
  )
}

export default GetHooks