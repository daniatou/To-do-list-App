import { React, Component } from 'react';
import './App.css';
import Main from './Main';
import Footer from './footer'
import AddTask from './AddTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <BrowserRouter>
          <Routes>
             <Route  path='/' element={<Main />}  />
             <Route  path='/*' element={<Main />}  />
             <Route  path='/add-task'  element={[<AddTask />, <Main />]}  />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    )
  }

}

export default App;
