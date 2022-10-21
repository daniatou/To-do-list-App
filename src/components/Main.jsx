import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css'


class Main extends Component {
    render() {
        return (
            <main className=''>
                <div className="container">
                    <h3 className='text-start'>Todo list <i class="bi bi-tag"></i></h3>
                    <hr />
                    <ul class="list-group">
                        <li class="list-group-item  d-flex justify-content-between text-white ">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;
                            </button>
                            Cras justo odio
                            <button className='btn btn-sm  btn-outline-danger float-end'>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between text-white">
                            <button className='btn btn-sm btn-outline-success'>
                                &#x2713;
                            </button>
                            Dapibus ac facilisis in
                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between text-white">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;
                            </button>
                            Morbi leo risus
                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>
                        <li class="list-group-item d-flex justify-content-between text-white">
                            <button className='btn btn-sm  btn-outline-success'>
                                &#x2713;
                            </button>
                            Porta ac consectetur ac

                            <button className='btn btn-sm  btn-outline-danger '>
                                &#128465;
                            </button>
                        </li>

                    </ul>

                </div>

            </main>
        )
    }
}

export default Main;