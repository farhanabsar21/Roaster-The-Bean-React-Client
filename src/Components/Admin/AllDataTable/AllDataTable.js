import React from 'react';

const AllDataTable = ({allOrders}) => {
    return (
        <div>
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
                                    <select class="custom-select">
                                        <option value="pending">Pending</option>
                                        <option value="paid">Paid</option>
                                        <option value="Canceled">Canceled</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllDataTable;