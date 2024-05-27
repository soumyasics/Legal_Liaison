import React from 'react'
import './UserFooter.css'
import logo from '../../Assets/logo2.png'


function UserFooter() {
  return (
    <div className='user-footer'>
        <div className='row'>
            <div className='col-3'>
            <img  className='footer-img' src={logo} alt='Admin Footer Logo'/>{''}{''}{''}{''}{''}
                <label className='footer-logo-text'>LEGAL LIAISON</label>
            </div>
            <div className='col-3'>
                <h2 className='footer-title'>Lawyer</h2>
                <p className='footer-list'>Welcome to Legal Liaision. 
                    Your trusted Partner in legal services.
                    We are a team of dedicated and experienced legal professionals commited to providing high-quality legal solutions tailored to your needs.</p>
            </div>

            <div className='col-2'>
            <h2 className='footer-title quick-link'>Quick Links</h2>
            <ul className='footer-list'>
                <li className='list-style'>Home</li>
                <li className='list-style'>About Us</li>
                <li className='list-style'>Services</li>
                <li className='list-style'>Blog</li>
                </ul>
            </div>

            <div className='col-2'>
            <h2 className='footer-title legal'>Our Legal</h2>
                <ul className='footer-list'>
                <li className='list-style'>Civil Law</li>
                <li className='list-style'>Family Law</li>
                <li className='list-style'>Business Law</li>
                <li className='list-style'>Criminal Law</li>
            </ul>

            </div>

            <div className='col-2 help-div'>
            <h2 className='footer-title help'>Help</h2>
            <ul className='footer-list'>
                <li className='list-style'>Help Center</li>
                <li className='list-style'>Become an Afflicate</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default UserFooter