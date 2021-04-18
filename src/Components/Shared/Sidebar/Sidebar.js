import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../Images/logo/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    return (
        <div className="sidebar-container p-2">
            <div className="my-3">
                <Link to="/"><img src={logo} alt="company" /></Link>
            </div>
            <div className="mt-5">
                {loggedInUser && <ul>
                    <li><Link to="/user/userOrders">Orders</Link></li>
                </ul>}
                {loggedInUser && <ul>
                    <li><Link to={"/user/payment/"+serviceId}>Payment</Link></li>
                </ul>}
                {loggedInUser && <ul>
                    <li><Link to="/user/review">Review</Link></li>
                </ul>}
                {loggedInUser.isAdmin && <ul>
                    <li><Link to="/admin/allOrders">All Orders</Link></li>
                </ul>}
                {loggedInUser.isAdmin && <ul>
                    <li><Link to="/admin/addAdmin">Add Admin</Link></li>
                </ul>}
                {loggedInUser.isAdmin && <ul>
                    <li><Link to="/admin/addService">Add New Service</Link></li>
                </ul>}
                {loggedInUser.isAdmin && <ul>
                    <li><Link to="/admin/manageOrder">Manage Order</Link></li>
                </ul>}
            </div>
        </div>
    );
};

export default Sidebar;