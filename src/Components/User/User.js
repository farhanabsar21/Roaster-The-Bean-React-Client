import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import "./User.css";
import UserSelect from './UserSelect/UserSelect';

const User = () => {
    const [userServiceData, setUserServiceData] = useState([])
    useEffect(()=>{
        fetch("https://damp-chamber-86372.herokuapp.com/userOrders")
            .then(res => res.json())
            .then(data => setUserServiceData(data))
    },[])
    return (
        <section className="User-container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                    {userServiceData.map(selected => <UserSelect selected={selected} key={selected._id}></UserSelect>)}
                </div>
            </div>
        </section>
    );
};

export default User;