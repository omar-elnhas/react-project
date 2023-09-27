import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

export default function Navbar({userData,Logout}) {
  return (
    <nav className={`navbar position-fixed start-0 top-0 end-0 navbar-dark navbar-expand-lg ${styles.bgNavbar}`}>
    <div className="container">
      <Link className="navbar-brand" to="">Hooby</Link>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-muted"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">        
          <li className="nav-item">
            <Link className="nav-link" to=''>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='movies'>Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='tvshows'>Tv shows</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='people'>People</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='about'>About</Link>
          </li>
        </ul>:""}

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
          <div className="social-media ">
             <a href="https://www.facebook.com"><i className="fab fa-facebook mx-2"></i></a>
            <a href="https://www.spotify.com"> <i className="fab fa-spotify  mx-2"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram  mx-2"></i></a>            
             <a href="https://www.youtube.com"><i className="fab fa-youtube  mx-2"></i></a>
            </div>
            </div> 

<div className="col-md-6">
            {userData?<li className="nav-item">
             <div className=" row ">
              <div className="col-8 d-flex align-items-center">
             <span>hello : {userData.first_name}</span>
             </div>
             <div className="col-4">
            <Link className="text-secondary nav-link" onClick={()=>Logout()}>Logout</Link>
            </div>
             </div>
          </li>:<>
          <li className="nav-item">
            <Link className="nav-link" to='login'>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='register'>Register</Link>
          </li>
          </>}
          </div>
        
          
          </div>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}
