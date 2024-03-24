import React from 'react';
import './Home.css';
import backgroundImage from "../Images/bg.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: "91.5vh" }}>
          <h2 style={{ fontSize: "75px" }}> Discover Your Next</h2>
          <h3 style={{ fontSize: "60px" }} > Favourite Book Here.</h3>
          <p className='mb-0' style={{color:'silver', fontSize: "25px"}}>Explore our curated collection of new and popular books to find your next literary adventure. </p>
          <Link to='/books' className='viewBook my-3 '>View Books</Link>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center" style={{ height: "91.5vh" }}>
          <img className='img-fluid homeimg' src={backgroundImage} alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Home;


