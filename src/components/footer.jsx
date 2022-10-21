import { React, Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';



class Footer extends Component {
    // const params= useParams();
    // console.log(paams);

    render() {
        return (
            <footer className='container d-flex bg-secondary my-3 p-3 justify-content-between'>
                <div className="btn-group">
                    <button className='btn btn-outline-dark bg-light'>
                        <NavLink to='/'>
                            <i class="bi bi-list-task"></i>
                        </NavLink>
                    </button>
                    <button className='btn btn-outline-dark bg-light'>
                        <NavLink to='/completed'>
                             <i class="bi bi-check-square"></i>
                        </NavLink>
                    </button>
                    <button className='btn btn-outline-dark bg-light'><i class="bi bi-trash"></i></button>
                </div>
                <button className='btn btn-outline-dark bg-light'>
                    <NavLink to='/add-task'>
                         <i class="bi bi-plus-square"></i>
                    </NavLink>
                </button>
            </footer>
        )
    }
}

export default Footer;