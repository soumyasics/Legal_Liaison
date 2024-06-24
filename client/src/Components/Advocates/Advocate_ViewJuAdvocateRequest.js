import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';
import Lottie from 'lottie-react';
import img from "../../Assets/Vecto(2).png";
import img1 from "../../Assets/Vectorsymbol.png";
import img2 from "../../Assets/raphael_cross.png";
import noData from "../../Assets/noDataFound.json";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


function Advocate_ViewJuAdvocateRequest() {
    const [data, setData] = useState([]);
  const id=localStorage.getItem('junioradvocateId');

  useEffect(() => {
    axiosInstance
      .post(`/viewJuniorAdvocates`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setData(res.data.data || []);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  }, [id]);

  console.log(data);

  return (
    <div>
<div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>View Junior Advocates</label>
        </div>
    <div className="main-div">
      
      {data.length !== 0 ? (
        <div className="table-container table-striped">
          <table className="table-change container-fluid">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Practice Area</th>
                <th className="table-header">Experiance</th>
                <th className="table-header">Qualification</th>
                <th className="table-header">Contact No</th>
                <th className="table-header">No of cases attened/No of cases won</th>
                <th className="table-header">Bar council enrollment no</th>
                <th className="table-header">Date of enrollment</th>
                <th className="table-header">View details</th>
                <th className="table-header">Accept</th>
                <th className="table-header">Reject</th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((juadvocatereq) => (
                  <tr>
                    <td className="table-data">
                        {/* {juadvocatereq.name} */} {juadvocatereq.name}
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.specialization} */}I Don't know
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.experiance} */} Don't know
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.qualification} */} Don't know
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.contact} */} Don't know
                    </td>
                    <td className="table-data">
                        I think 0
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.bcNo} */} Don't know
                    </td>
                    <td className="table-data">
                        {/* {juadvocatereq.dateOfEnrollment} */} Don't know
                    </td>
                    <td className="table-data">
                      <Link 
                    //   to={`/admin_view_single_advocate/${advocate._id}`}
                      >
                        <button className="btn1 btn btn-outline-secondary">
                          <img src={img} alt="View Details" />
                          {/* <FaEye className='icon-style-change'/> */}
                        </button>
                      </Link>
                    </td>
                    <td className="table-data">
                    <button
                        className="btn btn-outline-success success-size"
                        // onClick={() => handleApprove(junioradvocate._id)}
                      >
                        <img src={img1} alt="Approve Advocate" />
                      </button>
                    </td>
                    <td className="table-data">
                    <button
                        className="btn btn-outline-danger"
                        // onClick={() => handleReject(junioradvocate._id)}
                      >
                        <img src={img2} alt="Reject Advocate" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>No Data obtained</h1>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no_data_animation">
          <Lottie animationData={noData} className="no_data_animation" />
        </div>
      )}
    </div>
    </div>
  )
}

export default Advocate_ViewJuAdvocateRequest