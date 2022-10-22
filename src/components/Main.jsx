import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css'
import Todo from './Todo';


const Main =({tasks}) => (
            <main className=''>
                <div className="container">
                    <h3 className='text-start'>Todo list <i class="bi bi-tag"></i></h3>
                    <hr />
                    <ul class="list-group">
                        {
                            tasks?.map((task) => <Todo task={task} key = {task.id} />)
                        }
                    </ul>
                </div>
            </main>
        )
 

export default Main;