import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import "./AddReviews.css";

const AddReviews = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('message', info.message);

        fetch('https://damp-chamber-86372.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data) { alert("Thanks for the Review!")}
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="AddReview">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h2>Write A Review to Inspire Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="mt-5" onSubmit={handleSubmit}>
                                <div className="div">
                                    <input type="text" onBlur={handleBlur} name="name" placeholder="your name"/>
                                </div>
                                <div className="div">
                                    <input type="text" onBlur={handleBlur} name="designation" placeholder="your designation"/>
                                </div>
                                <div className="div">
                                    <textarea onBlur={handleBlur} name="message" id="" cols="30" rows="5" placeholder="your review"></textarea>
                                </div>
                                <div className="div">
                                    <input onChange={handleFileChange} type="file" name="file" placeholder="your image"/>
                                </div>
                                <div>
                                    <button type="submit" className="btn mt-4">Submit review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;