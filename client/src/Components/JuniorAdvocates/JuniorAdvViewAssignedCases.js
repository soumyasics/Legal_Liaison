import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';
import noData from "../../Assets/noDataFound.json";
import img from "../../Assets/Vecto(2).png";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';



function JuniorAdvViewAssignedCases() {

    const [data, setData] = useState([]);
  const id = localStorage.getItem("junioradvocateId");

  useEffect(() => {
    axiosInstance
      .post(`/getCasesAssignedForJrId/${id}`)
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

  return (
    <div>
      <div>
      <div className="junior-heading-div container-fluid">
        <label className="junior-reg-title">Assigned Cases</label>
      </div>
      <div className="main-div">
        {data.length !== 0 ? (
          <div className="table-container table-striped">
            <table className="table-change container-fluid">
              <thead>
                <tr>
                  <th className="table-header">Case Title</th>
                  <th className="table-header">Client Name</th>
                  <th className="table-header">Phone Number</th>
                  <th className="table-header">Case Type</th>
                  <th className="table-header">Date of Incident</th>
                  <th className="table-header">Opponent Name</th>
                  <th className="table-header">Opponent Details</th>
                  <th className="table-header">Case Location</th>
                  
                </tr>
              </thead>
              <tbody>
                {data.length ? (
                  data.map((juadvocatereq) => (
                    <tr>
                      <td className="table-data">{juadvocatereq.jrId.name}</td>
                      <td className="table-data">
                        {juadvocatereq.jrId.specialization}
                      </td>
                      <td className="table-data">
                        {juadvocatereq.jrId.institute}
                      </td>
                      <td className="table-data">
                        {juadvocatereq.jrId.qualification} 
                      </td>
                      <td className="table-data">
                        {juadvocatereq.jrId.contact}
                      </td>

                      <td className="table-data">{juadvocatereq.jrId.bcNo}</td>
                      <td className="table-data">
                        {juadvocatereq.jrId.dateOfEnrollment}
                      </td>
                      <td className="table-data">
                       location
                      </td>
                      <td className="table-data">
                      <Link
                          to={`/advocate_assign_cases_to_jnradv`}
                        >
                          <button className=" btn btn-outline-secondary">
                            More
                          </button>
                        </Link>
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
    </div>
  )
}

export default JuniorAdvViewAssignedCases
