import React from 'react';
import './Home.css';
import useReview from '../hook/useReview';
import AllReview from './AllReview';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [review, setReview] = useReview();
    const navigate = useNavigate();
 const handleToReview = () =>{
   navigate('/review')
 }

    console.log(review);
    return (
        <div>
            <div className="container-detail d-flex justify-content-evenly align-items-center ">
                  <div className="details">                 
                 <h1>Find your parts <br /> <span className='tex'>Which is NEED</span> </h1>
                 <p>I have all parts of your bike. If you need something of your bike, Call us. We can provide best parts in sort time. We are import Bike's parts from China. Generally, We have all parts in stock. Somehow some parts stockout we cover it in sort time as soon as that.</p>

                 <button className='bg'>Live demo</button>
                  </div>
                  <div className="image">
                    <img src="/bike.png" alt="" />
                  </div>
            </div>



            <div className="customer-sec">
               <div className="upper-tag-review">
               <h2 className='fw-bold text-center'>Customer Reviews(3)</h2>
               </div>
            
            
               <div className="reviewer">
                 <div className="review-three">
                    {
                        review.slice(0, 3).map(view =>  <AllReview key={view.id} view={view}></AllReview>)
                    }
                
                 </div>
               </div>
          
               <div className="see-allReview mt-3">
                <button onClick={handleToReview}>See All Reviews</button>
               </div>
            </div><br /><br />
        </div>
    );
};

export default Home;