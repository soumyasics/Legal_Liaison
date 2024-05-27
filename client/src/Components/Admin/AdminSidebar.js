import React from 'react'
import './AdminSidebar.css'
import userimg from './../../Assets/carbon_dashboard.png'
import advocateimg from './../../Assets/openmoji_add-contact.png'
import casesimg from './../../Assets/Group.png'
import enquiryimg from '../../Assets/Vector.png'
import juniorimg from '../../Assets/arcticons_pixel-clock-widgets.png'
import internimg from '../../Assets/material-symbols_stream-apps-outline.png'
import profile from '../../Assets/5856.jpg'


function AdminSidebar() {
  return (
    <div className='row-4'>
        <div className='admin-sidebar'>
            <div className='profile-div'>
                <img className='img-style' src={profile}/>
                <label className='profile-label'>Administrator</label>
            </div>
            <div className='content-div'>
                <div className='div-style'>
                <div>
                <label className='label'>General</label>
                <div>
                <img src={userimg} className='image-adjust' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>Users</label>
                </div>
                <div>
                <img src={advocateimg} alt='User image'/>{' '},{' '}
                    <label className='label-sub '>Advocate</label>
                </div>
                <div>
                <img src={casesimg} className='image-adjust' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>View Cases</label>
                </div>
                <div>
                <img src={enquiryimg} className='image-adjust' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>View Enquires</label>
                </div>
                <div>
                <img src={juniorimg} className='image-adjust' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>Manage Junior Advocates</label>
                </div>
                <div>
                <img src={internimg} alt='User image'/>{' '},
                    <label className='label-sub'>Manage Interns</label>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar