import React, { Component } from 'react'

export default class Todo extends Component {
  // constructor
  constructor(){
    super();
    this.state={
      task:["Learning DSA", "Learning Dbms", "Dev"],
      currentTask: ""
    }
  }
  
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      currentTask: e.target.value
    })
  }
  
  handleAddTask = () =>{
    this.setState({
      task: [...this.state.task, this.state.currentTask]
    })
  }

//   handleAddTask = () => {
//     this.setState({
//           tasks:[...this.state.tasks,this.state.currTask] //8k
//       })
//  }

  render() {
    return (
      <>
          <input 
            type="text"
            placeholder="Enter your Task"
            onChange = {this.handleChange}
            />
          <button onClick= {this.handleAddTask} >Add Task</button>

          {
            this.state.task.map((task) => {
              return ( 
                <li>
                  <p>{task}</p>
                  <button>Delete</button>
               </li>
              )
            })
          }
              
      </>
    )
  }
}
