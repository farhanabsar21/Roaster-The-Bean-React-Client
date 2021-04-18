import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./ServiceData.css";

const ServiceData = ({service}) => {
    const [prevData, setPrevData] = useState([]);
    useEffect(()=>{
        fetch("https://damp-chamber-86372.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setPrevData(data))
    }, [])
    const handleAddService = () => {
        const prevDataId = service;
        const newData = prevData.filter(selectedData => selectedData._id === prevDataId._id);
        console.log(newData);
        
        fetch("https://damp-chamber-86372.herokuapp.com/userOrders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(result => result)
    }
    return (
        <section className="service-data col-md-4 text-center">
            <div className="m-1 py-4 px-4 service-data-content">
                <img src={service.icon} alt="service"/>
                <h4>{service.title}</h4>
                <h6>${service.price}</h6>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis enim voluptas ipsum reiciendis aspernatur? Neque.</p>
                <Link to={"/user/payment/"+service._id}><button className="btn order-btn">Order</button></Link>
                <button onClick={handleAddService} className="plus-btn" type="submit"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </section>
    );
};

export default ServiceData;