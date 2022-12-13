import React, { Component } from 'react'
import axios from 'axios'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{console.log(res.data)
        this.setState({posts:res.data})})
      //.catch((err)=>console.log(err))
    }
  render() {
    const {posts}=this.state
    return (
      <div>
      <h2>Table of posts</h2>
      <table> 
      <tr>
      <th>ID</th>
      <th>Title</th>
      <th>User id</th>
      </tr>
      {posts.map((post)=> 
        <tr>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.userId}</td>
        </tr>
        )}
        </table>
        </div>
        )
      }
    }
    
    //<button onClick={this.but}>GET</button>