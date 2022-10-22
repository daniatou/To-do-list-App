import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css'
import Todo from './Todo';
import { useParams } from 'react-router-dom';


const Main =({tasks}) => {
    let filteredTask =useParams();
    console.log(filteredTask)
    return(
        <main className=''>
            <div className="container">
                <h3 className='text-start'>Todo list <i className="bi bi-tag"></i></h3>
                <hr />
                <ul className="list-group">
                    {
                        tasks?.map((task) => <Todo task={task} key = {task.id} />)
                    }
                </ul>
            </div>
        </main>
    )
}
        
 

export default Main;