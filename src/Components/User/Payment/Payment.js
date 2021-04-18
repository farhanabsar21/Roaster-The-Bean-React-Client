import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "./Payment.css";
import CheckoutForm from './simplePayForm';

const stripePromise = loadStripe(
    'pk_test_51IeFd2CYfUuKtfP94dMYCd88lvAgWBAcpGPMvJTiBvHDnQ8dOHowXOjYIUZa6iva8zyR3LDFqGHmWYvA1GlTi4Gw00M2omwerq'
);

const Payment = () => {
    const [servicePay, setServicePay] = useState([]);
    const { serviceId } = useParams();
    useEffect(()=>{
        fetch("https://damp-chamber-86372.herokuapp.com/user/payment/"+serviceId)
            .then(res => res.json())
            .then(data => setServicePay(data))
    },[serviceId])
    const { title, price } = servicePay;
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-5 order-title p-1 text-center">
                                <p className="mt-3">Your Order: <strong>{title}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row order-card p-2">
                                    <div className="col-md-12">
                                        <h3>Complete Your Payment</h3>
                                        <h5>Your Bill Is: <strong>{price}$</strong></h5>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm></CheckoutForm>
                                        </Elements>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;