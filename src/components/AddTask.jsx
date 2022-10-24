import { React, Component } from 'react';
import { useNavigate } from 'react-router-dom'



class AddTask extends Component {
    

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddTask(this.newTask.value)
        // const navigate = useNavigate();
        // navigate('/')
        
    }
    render() {
        

        return (
            <form className='' onSubmit={e => this.handleSubmit(e)} >
                <div className=" container my-5 input-task d-flex justify-content-between">
                    <div className="tag-icon">
                        <i className="bi bi-tag"></i>
                    </div>
                    <input type="text" className="form-control shadow-none px-5" id="task" placeholder=" What need to be done?" ref={input => this.newTask = input}>
                    </input>
                    <button type="submit" className="btn btn-primary px-50"> <i className="bi bi-plus-circle-fill"></i> Add</button>
                </div>
            </form>
        )
    }
}

export default AddTask;