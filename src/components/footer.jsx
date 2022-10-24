import { React } from 'react';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';




const Footer = ({onDeletedCompleted}) => {
    // const params= useParams();
    // console.log(paams);

   
        return (
            <footer className='container d-flex bg-secondary my-3 p-3 justify-content-between'>
                <div className="btn-group">
                    <button className='btn btn-outline-dark bg-light'>
                        <NavLink to='/'>
                            <i className="bi bi-list-task"></i>
                        </NavLink>
                    </button>
                    <button className='btn btn-outline-dark bg-light'>
                        <NavLink to='/completed'>
                             <i className="bi bi-check-square"></i>
                        </NavLink>
                    </button>
                    <button className='btn btn-outline-dark bg-light' onClick = {onDeletedCompleted}><i className="bi bi-trash"></i></button>
                </div>
                <button className='btn btn-outline-dark bg-light'>
                    <NavLink to='/add-task'>
                         <i className="bi bi-plus-square"></i>
                    </NavLink>
                </button>
            </footer>
        )
    }


export default Footer;