import React from 'react';
import "./UserSelect.css";

const UserSelect = ({selected}) => {
    return (
        <div className="selected-data text-center p-3 mt-4">
            <img src={selected.icon} alt="service"/>
            <h2>{selected.title}</h2>
            <h6>{selected.price}$</h6>
            <div>
                <select class="custom-select">
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="Canceled">Canceled</option>
                </select>
            </div>
        </div>
    );
};

export default UserSelect;