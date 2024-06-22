import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './Advocate_ViewCaseRequest.css';
import img from "../../Assets/Vecto(2).png";
import axiosInstance from "../Constants/BaseUrl";
import noData from "../../Assets/noDataFound.json";
import Lottie from "lottie-react";

function Advocate_ViewCaseRequest() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/getAppointmentReqsForAdv/${id}`)
      .then((res) => {
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
      <div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>Case Request</label>
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
                <th className="table-header"> </th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((caseReq) => (
                  <tr>
                    <td className="table-data">{caseReq.title}</td>
                    <td className="table-data">Client Name</td>
                    <td className="table-data">Phone</td>
                    <td className="table-data">{caseReq.type}</td>
                    <td className="table-data">{caseReq.dateOfIncident}</td>
                    <td className="table-data">{caseReq.opponentName}</td>
                    <td className="table-data">{caseReq.opponentAddress}</td>
                    <td className="table-data">{caseReq.location}</td>
                    <td className="table-data">
                      <Link to={`/case_details/${caseReq._id}`}>
                        <button className="btn1 btn btn-outline-secondary">
                           V
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
  );
}

export default Advocate_ViewCaseRequest;
