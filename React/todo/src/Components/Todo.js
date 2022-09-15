import React, { Component } from 'react'

export default class Todo extends Component {
  // constructor
  constructor(){
    super();
    this.state={
      task:[
        {id:1, task:"Learn DSA"},
        {id:2, task:"Learn javascript"},
      ],
      currentTask: ""
    }
  }
  
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      currentTask: e.target.value
    })
  }
  
  handleAddTask = () => {
    this.setState({
      task: [
        ...this.state.task,
        { id: this.state.task.length + 1, task: this.state.currentTask}
        ],
    })
  }

  handleDelete = (id) => {
    let newArr = this.state.task.filter(taskObj => taskObj.id != id)
    // newArr -> 1,3 (1 ki id with task, 3 ki id with task)
    this.setState({
      task: [...newArr]
    })
  }


  render() {
    return (
      <>
          <input 
            type="text"
            placeholder="Enter your Task"
            onChange = {this.handleChange}
            />
          <button onClick= {this.handleAddTask} >Add Task</button>

          {               //map(item,idx,array)
            this.state.task.map((taskObj, idx) => {
              return ( 
                <li className="list" key={taskObj.id}>
                  <p> {idx+1} {taskObj.task}</p>
                  <button onClick={ () => this.handleDelete(taskObj.id)}>Delete</button>
               </li>
              )
            })
          }

      </>
    )
  }
}
