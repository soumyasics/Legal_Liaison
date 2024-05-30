
import React, { useEffect, useState } from 'react';
import './ViewAllAdvocates.css';
import img from '../../Assets/Vecto(2).png';
import axiosInstance from "../Constants/BaseUrl";

function ViewAllAdvocates() {
  const [data, setData] = useState([]);

  //   const [isActive,setIsActive]=useState(false)

  // const handleActivate=(a)=>{
  //   setIsActive(true)
  // }

  // const handleDeactivate=(a)=>{
  //   setIsActive(false)
  // }

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
            {data.length ? (
              data.map((advocate) => (
                <tr>
                  <td className='table-data'>{advocate.bcNo}</td>
                  <td className='table-data'>{advocate.name}</td>
                  <td className='table-data'>{advocate.specialization}</td>
                  <td className='table-data'>{advocate.bcState}</td>
                  <td className='table-data'>{advocate.qualification}</td>
                  <td className='table-data'>{advocate.experience}</td>
                  <td className='table-data'>
                    <button className="btn1 btn btn-outline-secondary">
                      <img src={img} alt="View Details" />
                    </button>
                  </td> {console.log(advocate.isActive)}
                  <td className='table-data'>
                  {(advocate.isActive)?(
                        <button className="btn btn-outline-primary" >Deactivate</button>
                    ):(
                        <button className="btn btn-outline-danger">Activate</button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <h1>
               No Data obtained
            </h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllAdvocates;
