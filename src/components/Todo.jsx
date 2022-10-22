import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
        <li className="list-group-item  d-flex justify-content-between text-white ">
            {this.props.task.name}
            <button className='btn btn-sm  btn-outline-success'>
                &#x2713;
            </button>
            {/* <button className='btn btn-sm  btn-outline-danger float-end'>
                &#128465;
            </button> */}
       </li>
    )
  }
}

