import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { imageUrl } from '../Constants/Image_Url';

function JuAdvocate_RequestMentorshop() {
    const [advocate, setAdvocate] = useState({
        profilePic: { filename: '' },
        idProof: { filename: '' },
      });
      const { id } = useParams();
      const { cid } = useParams();
      const userId = localStorage.getItem('userId');
    
      const navigate = useNavigate();
    
      useEffect(() => {
        axiosInstance
          .post(`/viewAdvocateById/${id}`)
          .then((response) => {
            setAdvocate(response.data.data);
          })
          .catch((error) => {
            console.error(
              "There was an error fetching the advocate details!", 
              error
            );
          });
      }, [id]);
    
    //   const onSubmit = () => {
    //     axiosInstance
    //       .post(`/createAppointment`, { userId: userId, caseId: cid, advocateId: advocate._id })
    //       .then((res) => {
    //         console.log(res);
    //         if (res.data.status === 200) {
    //           toast.success("Appointment request created successfully");
    //           navigate('/user_view_recent_cases')
    //         } else {
    //           toast.error("Failed to create appointment request");
    //         }
    //       })
    //       .catch(() => {
    //         toast.error("Failed to create appointment request");
    //       });
    //   };
    
    //   // Function to determine if the file is an image
    //   const isImage = (filename) => {
    //     return /\.(jpg|jpeg|png|gif)$/.test(filename.toLowerCase());
    //   };
    
    //   // Function to determine if the file is a PDF
    //   const isPDF = (filename) => {
    //     return /\.pdf$/.test(filename.toLowerCase());
    //   };
  return (
    <div>
        <div className="junior-heading-div container-fluid">
        <label className="junior-reg-title">View Advocates</label>
      </div>
      <div className="container-fluid mt-5 ">
        <div className="row justify-content-center">
          <div className="admin_view_junioradvocate_img col-lg-4 col-md-6 col-sm-12 text-center">
            <br />
            <img
              src={`${imageUrl}/${advocate.profilePic.filename}`}
              className="img-fluid rounded image-size"
              alt="Advocate"
            />

            <label className="ju-advocate-name d-block mt-3">
              {advocate.name}
            </label>
            <label className="ju-practice-area d-block">
              {advocate.specialization}
            </label>
            <label className="client-view-ad-experiance d-block">
              {advocate.experience} Years of Experience in Various Cases
            </label>
            <Link className="ju-link-label" to="#" data-toggle="modal" data-target="#idProofModal">
              View Id Proof
            </Link>
          </div>
          <div className="col-sm-6 col-lg-6">
            <div>
              <table className="table ju-custom-table">
                <tbody>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        No of Case Attended
                      </label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        0
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">No of Case Won </label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        0
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        Bar Council Enrollment Number
                      </label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">{advocate.bcNo}</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">Date of Enrollment</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        {advocate.dateOfEnrollment}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">State Bar Council</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">{advocate.bcState}</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        Specialization Areas
                      </label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        {advocate.specialization}
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        Educational Qualification
                      </label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        {advocate.qualification}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">Gender</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">{advocate.gender}</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">Email Address</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">{advocate.email}</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">Contact Number</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">{advocate.contact}</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-alignn">
                      <label className="ju-sub-label">Nationality</label>
                    </td>
                    <td className="left-alignn">:</td>
                    <td className="left-alignn">
                      <label className="ju-sub-label">
                        {advocate.nationality}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="appoinment-btn-div">
                <button className="btn btn-warning button-style-appoinment" 
                // onClick={onSubmit} 
                >
                  Request for Mentorship
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default JuAdvocate_RequestMentorshop