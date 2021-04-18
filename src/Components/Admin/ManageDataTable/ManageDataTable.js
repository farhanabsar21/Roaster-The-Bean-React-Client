import React from 'react';
import "./ManageDataTable.css";

const ManageDataTable = ({allOrders, handleDelete}) => {

    // const handleDelete = (event, key) => {
    //     // let getKey = allOrders.filter(pd => pd._id === pd);
    //     // console.log(getKey);
    //     // fetch(`https://damp-chamber-86372.herokuapp.com/delete/${key}`, {
    //     //     method: "DELETE"
    //     // })
    //     // .then(res => res.json())
    //     // .then(result => {
    //     //     if(result){
    //     //         event.target.parentElement.style.display = "none"; 
    //     //     }
    //     // })
    //     // event.target.parentElement.style.display = "none";
    //     console.log(event.target)
    // }
    return (
        <div className="manage-data-table">
           <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Order Title</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((order, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.title}</td>
                                <td>{order.price}$</td>
                                <td>
                                    <button onClick={handleDelete} className="btn">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table> 
        </div>
    );
};

export default ManageDataTable;