import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import '../Admin/ViewProfile_AR.css';
import img from '../../Assets/image 21.png';

function ViewProfile_AR() {
    const [advocate, setAdvocate] = useState(null);
    const [data, setData] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      axiosInstance.post(`/viewAdvocateById/${id}`)
        .then(response => {
          setAdvocate(response.data.data);
        })
        .catch(error => {
          console.error('There was an error fetching the advocate details!', error);
        });
    }, [id]);

    const handleApprove = (id) => {
        axiosInstance.post(`/approveAdvocateById/${id}`)
            .then(res => {
                if (res.data.status === 200) {
                    const updatedData = data.map(advocate => {
                        if (advocate._id === id) {
                            advocate.adminApproved = true;
                        }
                        return advocate;
                    });
                    setData(updatedData);
                }
            })
            .catch(error => {
                console.error("Error!", error);
            });
    };

    const handleReject = (id) => {
        axiosInstance.post(`/rejectAdvocateById/${id}`)
            .then(res => {
                if (res.data.status === 200) {
                    const updatedData = data.map(advocate => {
                        if (advocate._id === id) {
                            advocate.adminApproved = false;
                        }
                        return advocate;
                    });
                    setData(updatedData);
                }
            })
            .catch(error => {
                console.error("Error!", error);
            });
    };


    if (!advocate) {
        return '';
      }
  
    return (
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <img src={img} className="img-fluid rounded" alt="Advocate" /><br />
            <label className="advocate-name d-block mt-3">{advocate.name}</label>
            <label className="practice-area d-block">Practice Area</label>
            <label className="experience-label d-block">{advocate.experience} Years of Experience in Various Cases</label><br />
            <Link className="link-label" to="">View Id Proof</Link>
          </div>
        <div className="col-4 mt-5 ">
            <div >
        <table className="table custom-table">
        <tbody>
            <tr>
                <td className='left-alignn'><label className="sub-label">Bar Council Enrollment Number </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.bcNo}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">Date of Enrollment </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.dateOfEnrollment}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">State Bar Council </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.bcState}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">Specialization Areas </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.specialization}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">Years of Experience </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.experience}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">Educational Qualification </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.qualification}</label></td>
            </tr>
            <tr>
                <td className='left-alignn'><label className="sub-label">Professional Experience </label></td>
                <td className='left-alignn'> : </td>
                <td className='left-alignn'><label className="sub-label">{advocate.experience}</label></td>
            </tr>
            
            <div className="row justify-content-center mt-4 arr">
                <div className="col-auto">
                    <button className="btn btn-warning btn-style  me-2" onClick={() => handleApprove(advocate._id)}>Accept</button>
                    <button className="btn btn-style btn-warning" onClick={() => handleReject(advocate._id)}>Reject</button>
                </div>
            </div>
        </tbody>
        
    </table>
    </div>
</div>

        </div>
        
      </div>
    );
  }

export default ViewProfile_AR;
