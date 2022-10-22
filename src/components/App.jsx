import { React, Component } from 'react';
import './App.css';
import Main from './Main';
import Footer from './footer'
import AddTask from './AddTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import initialData from '../initialData';



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <BrowserRouter>
          <Routes>
             <Route  path='/' element={<Main tasks={initialData} />} />
             {/* <Route  path='/*' element={<Main />}  /> */}
             <Route path='/:id' element={<Main tasks={initialData} />} />
             <Route  path='/add-task'  element={<AddTask />}  />
             {/* <Route  path='/add-task'  element={[<AddTask />, <Main />]}  /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    )
  }

}

export default App;
