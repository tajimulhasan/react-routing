import React from 'react';
import './AllReview.css';
const AllReview = ({view}) => {
    
    const {name, description, rating} = view;
    return (
        <div className='cart'>           
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Rating: {rating} </p>
        </div>
    );
};

export default AllReview;