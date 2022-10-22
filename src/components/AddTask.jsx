import { React } from 'react';



const AddTask = () => {
    return (
        <div className=" container my-5 input-task d-flex justify-content-between">
            <div className="tag-icon">
                <i className="bi bi-tag"></i>
            </div>
            <input type="text" class="form-control shadow-none px-5" id="task" placeholder=" What need to be done?">
            </input>
            <button type="submit" class="btn btn-primary px-50"> <i class="bi bi-plus-circle-fill"></i> Add</button>
        </div>
    )
}

export default AddTask;