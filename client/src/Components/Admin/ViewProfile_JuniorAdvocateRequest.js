import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { imageUrl } from '../Constants/Image_Url';

function ViewProfile_JuniorAdvocateRequest() {
  const [junioradvocate, setJuniorAdvocate] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("adminId") == null) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    axiosInstance
      .post(`/viewJuniorAdvocateById/${id}`)
      .then((response) => {
        setJuniorAdvocate(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the advocate details!", error);
      });
  }, [id]);

  const handleApprove = (id) => {
    axiosInstance
      .post(`/approveJuniorAdvocateById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          const updatedData = data.map((junioradvocate) => {
            if (junioradvocate._id === id) {
              junioradvocate.adminApproved = true;
            }
            return junioradvocate;
          });
          setData(updatedData);
          navigate("/adminviewalljunioradvocates");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const handleReject = (id) => {
    axiosInstance
      .post(`/rejectJuniorAdvocateById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          const updatedData = data.map((junioradvocate) => {
            if (junioradvocate._id === id) {
              junioradvocate.adminApproved = false;
            }
            return junioradvocate;
          });
          setData(updatedData);
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };


  if (!junioradvocate) {
    return "";
  }
  return (
    <div>
        {/* <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className=" text-center col-sm-6 col-lg-6">
                    <br/>
                    <img src={`${imageUrl}/${junioradvocate.profilePic.filename}`} className="img-fluid rounded" alt="Advocate" />

                    <label className="ju-advocate-name d-block mt-3">{junioradvocate.name}</label>
                    <label className="ju-practice-area d-block">{junioradvocate.specialization}</label>
                    <Link className="ju-link-label" to="">View Id Proof</Link>
                </div>
                <div className="col-sm-6 col-lg-6">
                    <div>
                        <table className="table ju-custom-table">
                            <tbody>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Bar Council Enrollment Number</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.bcNo}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Date of Enrollment</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.dateOfEnrollment}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">State Bar Council</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.bcState}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Specialization Areas</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.specialization}</label></td>
                                </tr>
                                
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Educational Qualification</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.qualification}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Institute Name</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.institute}</label></td>
                                </tr>
                                <tr>
                                    <td className='left-alignn'><label className="ju-sub-label">Percentage of Marks</label></td>
                                    <td className='left-alignn'>:</td>
                                    <td className='left-alignn'><label className="ju-sub-label">{junioradvocate.percentage} %</label></td>
                                </tr>
                                    <br/>
                                    {junioradvocate.isActive ? (
                                            <button
                                                className="btn btn-warning ju-button-size1"
                                                onClick={() => handleApprove(junioradvocate._id)}
                                            >
                                                Accept
                                            </button>
                                         ) : ( 
                                            <button
                                                className="btn btn-warning ju-button-size1"
                                                onClick={() => handleReject(junioradvocate._id)}
                                            >
                                                Reject
                                            </button>
                                         )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default ViewProfile_JuniorAdvocateRequest