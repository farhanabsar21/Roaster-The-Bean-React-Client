import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllDataTable from '../AllDataTable/AllDataTable';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=> {
        fetch("https://damp-chamber-86372.herokuapp.com/userOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div className="all-orders">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <AllDataTable allOrders={allOrders}></AllDataTable>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;