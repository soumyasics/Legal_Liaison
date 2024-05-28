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
                <div className='row'>
                    <div className='col-2'>
                    <img className='img-style' src={profile}/>
                    </div>
                    <div className='col-8'>
                    <label className='profile-label'>Administrator</label>
                    </div>
                </div>
            </div>
            <div className='content-div'>
                <div className='div-style'>
                <div>
                <label className='label'>General</label>
                <div className='adjust-space'>
                <img src={userimg} className='image-adjust-1 padding each' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>Users</label>
                </div>
                <div className='adjust-space'>
                <img src={advocateimg} className='padding2' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>Advocate</label>
                </div>
                <div className='adjust-space'>
                <img src={casesimg} className='image-adjust-1 padding each' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>View Cases</label>
                </div>
                <div className='adjust-space'>
                <img src={enquiryimg} className='image-adjust-1 img-enq padding each' alt='User image'/>{' '},{' '}
                    <label className='label-sub'>View Enquires</label>
                </div>
                <div className='adjust-space'>
                <img src={juniorimg} className='image-adjust-1 padding each' alt='User image'/>{' '},{' '}
                    <label className='label-sub '>Manage Junior Advocates</label>
                </div>
                <div className='adjust-space'>
                <img src={internimg} className='image-adjust-1 padding each-1' alt='User image'/>{' '}
                    <label className='label-sub padding'>Manage Interns</label>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar