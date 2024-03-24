import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{borderBottom:"1px solid white"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <a className="navbar-brand text-white" href="#">BookStore</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-item active nav-link text-white" to ='/'>
                Home 
              </Link>
              <Link className="nav-item active nav-link text-white" to ='/books'>
                Books 
              </Link>
              <Link className="nav-item active nav-link text-white" to ='/addBook'>
                Add Books 
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
