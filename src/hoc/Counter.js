import React, { Component } from 'react'
import EnComponent from './Hoc'
class Counter extends Component {
   
  render() {
    return (
      <div>
      {this.props.name}
      <button onClick={this.props.inc}>click
      {this.props.count}</button>
      </div>
    )
  }
}
export default EnComponent(Counter);