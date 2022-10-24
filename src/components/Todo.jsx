import React, { Component } from 'react'

export default class Todo extends Component {

  state = {
    completed: this.props.task.completed
  }

  toggleCompleted = () => {
    this.setState((previousState) => ({
      completed: !previousState.completed
    }))

    this.props.onToggleCompleted(this.props.task.id)
  }

  render() {
    return (
      <li className={"list-group-item  d-flex justify-content-between text-white " + (this.state.completed ? 'bg-success bg-opacity-75' : null)}>
        {this.props.task.name}
        <button className={"btn btn-sm " + (this.state.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => this.toggleCompleted()}>
          &#x2713;
        </button>
        {/* <button className='btn btn-sm  btn-outline-danger float-end'>
                &#128465;
            </button> */}
      </li>
    )
  }
}

