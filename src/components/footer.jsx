import { React, Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className='container d-flex bg-secondary my-3 p-3 justify-content-between'>
                <div className="btn-group">
                    <button className='btn btn-outline-dark bg-light'><i class="bi bi-list-task"></i></button>
                    <button className='btn btn-outline-dark bg-light'><i class="bi bi-check-square"></i></button>
                    <button className='btn btn-outline-dark bg-light'><i class="bi bi-trash"></i></button>
                </div>
                <button className='btn btn-outline-dark bg-light'>
                    <i class="bi bi-plus-square"></i>
                </button>
            </footer>
        )
    }
}

export default Footer;