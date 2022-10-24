import { React, Component } from 'react';
import './App.css';
import Main from './Main';
import Footer from './footer'
import AddTask from './AddTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import initialData from '../initialData';
import uniqueId  from 'uniqueid';



class App extends Component {

  state = {
    tasks : initialData
  }

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find(task => task.id === taskId);
    taskToUpdate.completed = !taskToUpdate.completed;
    this.setState(prevState => (
      prevState.tasks.map(task => {
       return  task.id === taskId ? taskToUpdate : task 
      } )
       
    ))
  }

  onAddTask = (newTaskName) => {
    let newTask = {
      id : uniqueId(),
      name : newTaskName,
      completed: false
    }

    this.setState(prevState => ({
      tasks : [...prevState.tasks, newTask]
    }))
  }

  onDeletedCompleted = () =>{
    this.setState(prevState =>{
        let newState = prevState.tasks.filter(task => !task.completed)
        return {
            tasks : newState
        }
    })
}

  render() {
    return (
      <div className="container-fluid">
        
        <BrowserRouter>
          <Routes>
             <Route  path='/' element={<Main tasks={this.state.tasks} onToggleCompleted ={this.onToggleCompleted} />} />
             {/* <Route  path='/*' element={<Main />}  /> */}
             <Route path='/:id' element={<Main tasks={this.state.tasks} onToggleCompleted ={this.onToggleCompleted} />} />
             <Route  path='/add-task'  element={<AddTask  onAddTask= {this.onAddTask}/>}   />
             {/* <Route  path='/add-task'  element={[<AddTask />, <Main />]}  /> */}
          </Routes>
          <Footer onDeletedCompleted ={this.onDeletedCompleted} />
        </BrowserRouter>
      </div>

    )
  }

}

export default App;
