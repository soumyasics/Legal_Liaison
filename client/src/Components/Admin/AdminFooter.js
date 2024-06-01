import React from 'react'
import './AdminFooter.css'
import logo from '../../Assets/logo2.png'

function AdminFooter() {
  return (
    <div className='admin-footer'>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img  className='footer-img' src={logo} alt='Admin Footer Logo'/>
                <label className='footer-logo-text'>LEGAL LIAISON</label>
            </div>
            <div className='col-6'>            
                <label className='footer-text'>© Copyright | All Right Reserved</label>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default AdminFooter