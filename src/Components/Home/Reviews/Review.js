import React, { useEffect } from 'react';
import "./Review.css";
import ReviewDetails from './ReviewDetails/ReviewDetails';
import { useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch("https://damp-chamber-86372.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="Review p-5">
            <div className="container mt-5">
                <div className="text-center">
                    <p>Reviews</p>
                    <h1>Some Of Our Happy Clients</h1>
                </div>
                <div className="row mt-5">
                    {reviews.map(review => <ReviewDetails review={review} key={review._id}></ReviewDetails>)}
                </div>
            </div>
        </section>
    );
};

export default Review;