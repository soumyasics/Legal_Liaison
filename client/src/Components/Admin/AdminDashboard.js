import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import userimg from '../../Assets/Vector (1).png'
import casesimg from '../../Assets/Vector (2).png'
import adimg from '../../Assets/image 19.png'
import complaintimg from '../../Assets/codiconbriefcase.png'
import axiosInstance from "../Constants/BaseUrl";

function AdminDashboard() {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        axiosInstance.post('/viewUsers')
            .then(response => {
                console.log('Response from backend:', response.data);
                if (response.data.status === 200 && response.data.data) {
                    setUserCount(response.data.data.length);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);
  
  return (
    <div className='row-8'>
    <div className='container-fluid'>
        <label className='main-label'>Dashboard</label>
        <div className='row'>
            <div className='col-3'>
                <div className='dashbord-box'>
                <img className='image-adjust' src={userimg}/>
                <div className='text-container'>
                    <label className='count-label'>{userCount}</label>
                    <label className='content-label'>Users</label>
                </div>
                </div>
            </div>

            <div className='col-3'>
                <div className='dashbord-box'>
                <img className='image-adjust' src={casesimg}/>
                <div className='text-container'>
                    <label className='count-label'>0</label>
                    <label className='content-label'>Cases</label>
                </div>
                </div>
            </div>

            <div className='col-3'>
                <div className='dashbord-box'>
                <img className='image-adjust' src={adimg}/>
                <div className='text-container'>
                    <label className='count-label'>0</label>
                    <label className='content-label'>Advocates</label>
                </div>
                </div>
            </div>

            <div className='col-3'>
                <div className='dashbord-box'>
                <img className='image-adjust' src={complaintimg}/>
                <div className='text-container'>
                    <label className='count-label'>0</label>
                    <label className='content-label'>Complaints</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdminDashboard;