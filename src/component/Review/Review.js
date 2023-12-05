import React from 'react';
import useReview from '../hook/useReview';
import AllReview from '../Home/AllReview';
import './Review.css';
const Review = () => {
    const [review, setReview] = useReview();
    return (
       <div className="div mb-4">
         <h1>What our customers say!</h1>
         <div className='see-all-parent'>
         <div className="see-all">
         {
                        review.map(view =>  <AllReview key={view.id} view={view}></AllReview>)
          }     
            </div>        
        </div>
       </div>
    );
};

export default Review;