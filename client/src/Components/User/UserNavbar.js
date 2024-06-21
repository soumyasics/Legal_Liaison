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
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar pe-5">
      <div className="container-fluid">
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
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cases
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='' className="dropdown-item" >Client</Link>
                <Link to={''}  className="dropdown-item" >Advocates</Link>
                
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#services">Advocate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#contact">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Chat</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Settings
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='' className="dropdown-item" >Client</Link>
                <Link to={''}  className="dropdown-item" >Advocates</Link>
                
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
