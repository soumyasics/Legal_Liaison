import React, { useEffect, useState } from 'react';
import './ViewAllAdvocates.css';
import img from '../../Assets/Vecto(2).png';
import axiosInstance from "../Constants/BaseUrl";
import { Link } from 'react-router-dom';

function ViewAllAdvocates() {
  const [data, setData] = useState([]);

  const handleActivate = (id) => {
    axiosInstance.post(`/activateAdvocateById/${id}`)
      .then(res => {
        if (res.data.status === 200) {
          const updatedData = data.map(advocate => {
            if (advocate._id === id) {
              advocate.isActive = true;
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

  const handleDeactivate = (id) => {
    axiosInstance.post(`/deactivateAdvocateById/${id}`)
      .then(res => {
        if (res.data.status === 200) {
          const updatedData = data.map(advocate => {
            if (advocate._id === id) {
              advocate.isActive = false;
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

  useEffect(() => {
    axiosInstance.post('/viewAdvocates')
      .then(res => {
        if (res.data.status === 200) {
          console.log(res);
          setData(res.data.data || []);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error("Error!", error);
      });
  }, []);

  return (
    <div className='main-div'>
      <Link to='/adminviewadvocaterequest'>View Advocate request</Link>
      {data.length ? (
        <div className="table-container table-striped">
          <table className='table-change container-fluid'>
            <thead>
              <tr>
                <th className='table-header'>Bar council Enrolment No</th>
                <th className='table-header'>Advocate Name</th>
                <th className='table-header'>Specialization areas</th>
                <th className='table-header'>Bar Council Area</th>
                <th className='table-header'>Educational qualification</th>
                <th className='table-header'>Years of Experience</th>
                <th className='table-header'>View full Details</th>
                <th className='table-header'>User Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((advocate) => (
                <tr>
                  <td className='table-data'>{advocate.bcNo}</td>
                  <td className='table-data'>{advocate.name}</td>
                  <td className='table-data'>{advocate.specialization}</td>
                  <td className='table-data'>{advocate.bcState}</td>
                  <td className='table-data'>{advocate.qualification}</td>
                  <td className='table-data'>{advocate.experience}</td>
                  <td className='table-data'>
                    <Link to={`/adminviewalladvocate/${advocate._id}`}>
                      <button className="btn1 btn btn-outline-secondary">
                        <img src={img} alt="View Details" />
                      </button>
                    </Link>
                  </td>
                  <td className='table-data'>
                    {advocate.isActive ? (
                      <button
                        className="btn btn-outline-danger button-size1"
                        onClick={() => handleDeactivate(advocate._id)}
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-success button-size1"
                        onClick={() => handleActivate(advocate._id)}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Data obtained</h1>
      )}
    </div>
  );
}

export default ViewAllAdvocates;
