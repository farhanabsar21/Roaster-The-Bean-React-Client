import React, { useEffect, useState } from 'react';
import "./Services.css";
import ServiceData from './servicedata/ServiceData';
import { useParams } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState([]);

    useEffect(()=>{
        fetch("https://damp-chamber-86372.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const { serviceId } = useParams();

    useEffect(()=>{
        fetch("https://damp-chamber-86372.herokuapp.com/user/payment/"+serviceId)
            .then(res => res.json())
            .then(data => setSingleService(data))
    },[serviceId])
    
    return (
        <div className="Services py-5">
            <div className="text-center">
                <p>Service</p>
                <h2>Our Top Class Services</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="container row">
                    {services.map(service => <ServiceData service={service} key={service._id}></ServiceData>)}
                </div>
            </div>
        </div>
    );
};

export default Services;