import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'

class Main extends Component {
    render() {
        return (
            <main className=''>
                <div className="container ">

            <div class="my-5">
                <input type="text" class="form-control col-sm-8 col-lg-8 shadow-none w-50" id="task" placeholder=" &#xF5B0; What need to be done?">
                </input>

           </div>
                    <h3 className='text-start'>Todo list</h3>
                  
                    <hr />
                    <ul class="list-group">
                        <li class="list-group-item  d-flex justify-content-between ">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;   
                            </button>
                            Cras justo odio 
                            <button className='btn btn-sm  btn-outline-danger float-end'>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <button className='btn btn-sm btn-outline-success'>
                                &#x2713;
                            </button>
                            Dapibus ac facilisis in
                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;
                            </button>
                            Morbi leo risus
                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;
                            </button>
                            Porta ac consectetur ac

                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>

                    </ul>

                    {/* <footer className='bg-secondary p-3'>

                    <div className="btn-group">
                        <button type="button"  className ="btn outline-dark float-start"> link</button>
                        <button type="button"  className ="btn outline-dark"> link</button>
                        </div>
                    </footer> */}

                </div>

            </main>
        )
    }
}

export default Main;