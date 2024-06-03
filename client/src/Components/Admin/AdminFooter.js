import React, { useEffect } from 'react'
import './AdminFooter.css'
import logo from '../../Assets/logo2.png'
import { useNavigate } from 'react-router-dom';

function AdminFooter() {
  
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminId" == null)) {
      navigate("/");
    }
  });

  return (
    <div className='admin-footer'>
      <div className=''>
        <div className='row'>
            <div className='col-6 col-adjust'>
            <img  className='footer-img' src={logo} alt='Admin Footer Logo'/>
            {/* <img  className='footer-img' src={logo1} alt='Admin Footer Logo name'/>              */}
                <label className='footer-logo-text'>LEGAL LIAISON</label>
            </div>
            <div className='col-6 col-adjust'>            
                <label className='footer-text'>© Copyright | All Right Reserved</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminFooter