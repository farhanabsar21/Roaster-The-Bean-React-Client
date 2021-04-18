import React from 'react';
import "./ReviewDetails.css";

const ReviewDetails = ({review}) => {
    return (
        <section className="col-md-4">
            <div className="Review-content p-4">
                <div className="d-flex">
                    <div>
                        <img src={`data:image/png;base64,${review.image.img}`} alt="review" />
                    </div>
                    <div className="ml-3">
                        <h5>{review.name}</h5>
                        <p className="designation">{review.designation}</p>
                    </div>
                </div>
                <p className="text-secondary">{review.message}</p>
            </div>
        </section>
    );
};

export default ReviewDetails;