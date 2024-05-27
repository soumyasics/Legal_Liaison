import React, { useEffect } from 'react'
import img1 from '../../Assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';

function UserNavbar() {

    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('userId'==null)){
            navigate('/')
        }
    })

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload(false);
      };

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar">
      <div className="container">
        <Link className="navbar-brand" to="#home">
          <img
            alt="Logo"
            src={img1}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          LEGAL LIAISON
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/user_home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#contact">Contact</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="ri-account-circle-fill"></i>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link onClick={handleLogout} className="dropdown-item" >Logout</Link>
                {/* <Link className="dropdown-item" >Advocates</Link>
                <Link className="dropdown-item" >Students</Link> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default UserNavbar
