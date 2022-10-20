import { React, Component } from 'react';
import './App.css';
import Main from './Main';
import Footer from './footer'
import AddTask from './AddTask';




class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AddTask />
        <Main />
        <Footer />
      </div>

    )
  }

}

export default App;
