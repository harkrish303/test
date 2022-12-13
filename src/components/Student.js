import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div><h3>Student of {this.props.dept} class</h3></div>
    )
  }
}