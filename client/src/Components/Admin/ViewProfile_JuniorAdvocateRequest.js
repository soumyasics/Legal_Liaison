import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { imageUrl } from '../Constants/Image_Url';
import './ViewProfile_AllJuniorAdvocates.css'

import Lottie from 'lottie-react';
import noData from "../../Assets/noDataFound.json";
import img from "../../Assets/Vecto(2).png";

function ViewProfile_JuniorAdvocateRequest() {
    const [advocate, setAdvocate] = useState(null);
    const [redirectToAllAdvocates, setRedirectToAllAdvocates] = useState(false);
    const [data,setData]=useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axiosInstance.post(`/viewJuniorAdvocateById/${id}`)
            .then(response => {
                setAdvocate(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the advocate details!', error);
            });
    }, [id]);

    const handleApprove = (id) => {
        axiosInstance.post(`/approveJuniorAdvocateById/${id}`)
            .then(res => {
            if (res.data.status === 200) {
                const updatedData = data.map((advocate) => {
                  if (advocate._id === id) {
                    return { ...advocate, adminApproved: true };
                  }
                  return advocate;
                });
                setData(updatedData);
                setRedirectToAllAdvocates(true);
              }
            })
            .catch((error) => {
                console.error("Error!", error);
              });
    };

    const handleReject = (id) => {
        axiosInstance.post(`/rejectJuniorAdvocateById/${id}`)
        .then((res) => {
            if (res.data.status === 200) {
              const updatedData = data.map((advocate) => {
                if (advocate._id === id) {
                  return { ...advocate, adminApproved: false };
                }
                return advocate;
              });
              setData(updatedData);
              setRedirectToAllAdvocates(true);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
    };

    if (redirectToAllAdvocates) {
        navigate("/adminviewalljunioradvocates");
    }

    if (!advocate) {
        return '';
    }
  return (
    <div>
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="admin_view_junioradvocate_img col-lg-4 col-md-6 col-sm-12 text-center">
                    <br/>
                    <img src={`${imageUrl}/${advocate.profilePic.filename}`} className="img-fluid rounded image-size" alt="Advocate" />

                    <label className="ju-advocate-name d-block mt-3">{advocate.name}</label>
                    <label className="ju-practice-area d-block">{advocate.specialization}</label>
                    <Link className="ju-link-label" to="">View Id Proof</Link>
                </div>
                <div className="col-sm-6 col-lg-6">
                    <div>
                        <table className="table ju-custom-table">
                            <tbody>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Bar Council Enrollment Number</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.bcNo}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Date of Enrollment</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.dateOfEnrollment}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">State Bar Council</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.bcState}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Specialization Areas</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.specialization}</label></td>
                                </tr>
                                
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Educational Qualification</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.qualification}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Institute Name</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.institute}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Percentage of Marks</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{advocate.percentage}%</label></td>
                                </tr>
                                    <br/>
                                    <div className="row justify-content-center mt-4 arr">
                                        <div className="col-auto">
                                        <button
                                            className="btn btn-warning btn-style  me-2"
                                            onClick={() => handleApprove(advocate._id)}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="btn btn-style btn-warning"
                                            onClick={() => handleReject(advocate._id)}
                                        >
                                            Reject
                                        </button>
                                        </div>
                                    </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProfile_JuniorAdvocateRequest