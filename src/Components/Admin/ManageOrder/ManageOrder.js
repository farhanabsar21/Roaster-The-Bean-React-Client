import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ManageDataTable from '../ManageDataTable/ManageDataTable';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=> {
        fetch("https://damp-chamber-86372.herokuapp.com/userOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const handleDelete = event => {
        event.target.parentNode.parentElement.style.display = "none";
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <ManageDataTable allOrders={allOrders} handleDelete={handleDelete}></ManageDataTable>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;