import React, { useEffect } from 'react'
import img1 from '../../Assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Admin/AdminNav.css'

function AdminNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#home">
          <img
            alt="Logo"
            src={img1}
            width="70"
            height="90"
            className="d-inline-block align-top logo-adjust"
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
              <Link className="nav-link" to="#about-us">ChangePassword</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default AdminNav