import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import "./AddAdmin.css";

const AddAdmin = () => {
    const [input, setInput] = useState({
        email: ''
    })
    const handleBlur = (e) => {

        const newInput = { ...input };
        newInput[e.target.name] = e.target.value;
        setInput(newInput);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.email) {

            fetch('https://damp-chamber-86372.herokuapp.com/addAdminEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: input.email })
            })
        }  
    }
    return (
        <div className="AddAdmin">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <div>
                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="div">
                                <input type="email" onBlur={handleBlur} name="email" placeholder="add an email" />
                            </div>
                            <div>
                                <button type="submit" className="btn mt-4">Add Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;