import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css'
import Todo from './Todo';
import { useParams } from 'react-router-dom';


const Main =({tasks}) => {
    let filteredTask
    let { id } = useParams();
    // console.log({ id });
    for (const [key, value] of Object.entries({ id })) {
        console.log(`${key}: ${value}`);
    switch (`${value}`) {
        case 'completed':
            filteredTask = tasks.filter(task => task.completed)
        break;
        default:
            filteredTask = tasks;
            break;
    }
}
    if(filteredTask.length ===0){
        return(
            <main className=''>
                <div className="container">
                    <h3 className='text-start'>Todo list <i className="bi bi-tag"></i></h3>
                    <hr />
                    <ul className="list-group">
                        <li className='list-group-item'>Aucune tâche planifiée.</li>
                    </ul>
                </div>
            </main>
        )

    } else{

        return(
            <main className=''>
                <div className="container">
                    <h3 className='text-start'>Todo list <i className="bi bi-tag"></i></h3>
                    <hr />
                    <ul className="list-group">
                        {
                            filteredTask?.map((task) => <Todo task={task} key = {task.id} />)
                        }
                    </ul>
                </div>
            </main>
        )
    }

}
        
 

export default Main;