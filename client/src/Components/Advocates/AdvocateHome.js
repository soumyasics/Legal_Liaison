import React, { useEffect, useState } from "react";
import "./AdvocateHome.css";
import icon from "../../Assets/policeHomeCaseIcon.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";

function AdvocateHome() {

  const [advocate, setAdvocate] = useState({});

  const navigate=useNavigate();


  useEffect(()=>{
    if(localStorage.getItem('advocateId'==null)){
        navigate('/')
    }
})

const id=localStorage.getItem('advocateId')

useEffect(() => {
  axiosInstance
    .post(`/viewAdvocateById/${id}`)
    .then((response) => {
      console.log(response);
      setAdvocate(response.data.data);
    })
    .catch((error) => {
      console.error("There was an error fetching the advocate details!", error);
    });
}, [id]);

  return (
    <div className="advocate_home">
      <div className="advocate_home_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p>
                Lawyers are the only persons in whom ignorance of the law is not
                punished...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="advocate_home_container ">
        <div className="container">
          <div className="row advocate_home_content">
            <div className="col-lg-8 col-md-6 col-sm-12 mt-3">
              <div className="container advocate_home_container1">
                <div className="advocate_home_container_card">
                  <p className="advocate_home_container_card_count">40</p>
                  <p className="advocate_home_container_card_title">
                    Case Requests
                  </p>
                </div>
                <div className="advocate_home_container_card">
                  <p className="advocate_home_container_card_count">21</p>
                  <p className="advocate_home_container_card_title">
                    Intern Requests
                  </p>
                </div>
                <div className="advocate_home_container_card">
                  <p className="advocate_home_container_card_count">60</p>
                  <p className="advocate_home_container_card_title">
                    Advocate Requests
                  </p>
                </div>
                <div className="advocate_home_container_card">
                  <p className="advocate_home_container_card_count">58</p>
                  <p className="advocate_home_container_card_title">
                    Advocate Requests
                  </p>
                </div>
              </div>
              <div className="container advocate_home_container2">
                <div className="advocate_home_container2_title mt-3">
                  <p>Recent Case Requests</p>
                </div>
                <div className="advocate_home_container2_table table-responsive">
                  <table className="table align-center">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Case Type</th>
                        <th scope="col">Date of Request</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline px-3"
                          >
                            <img src={icon} className="img-fluid" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline px-3"
                          >
                            <img src={icon} className="img-fluid" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline px-3"
                          >
                            <img src={icon} className="img-fluid" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 advocate_home_profile_container">
              <div className="container">
                <div className="advocate_home_profile_container_head">
                  <p className="advocate_home_profile_container_head_title">
                    {advocate.name}
                  </p>
                  <p className="advocate_home_profile_container_head_subtitle mt-1">
                    <span className="text-gold">Senior Advocate</span> of {advocate.bcState}
                  </p>
                  <p className="advocate_home_profile_container_head_subtitle mt-1">
                    <span className="text-gold">{advocate.experience}</span> Years Of Experience
                  </p>
                </div>
                <div className="advocate_home_profile_container_body mt-5">
                  <table className="w-100">
                    <thead>
                      <tr>
                        <td scope="col">Email Address</td>
                        <td scope="col">: {advocate.email}</td>
                      </tr>
                      <tr>
                        <td scope="col">Contact Number</td>
                        <td scope="col">: {advocate.contact}</td>
                      </tr>
                      <tr>
                        <td scope="col">Bar Council Enrollment Number</td>
                        <td scope="col">: {advocate.bcNo}</td>
                      </tr>
                      <tr>
                        <td scope="col">Date of Enrollment</td>
                        <td scope="col">: {advocate.dateOfEnrollment}</td>
                      </tr>
                      <tr>
                        <td scope="col">State Bar Council</td>
                        <td scope="col">: {advocate.bcState}</td>
                      </tr>
                      <tr>
                        <td scope="col">Specialization Areas</td>
                        <td scope="col">: {advocate.specialization}</td>
                      </tr>
                      <tr>
                        <td scope="col">Educational Qualification</td>
                        <td scope="col">: {advocate.qualification}</td>
                      </tr>
                    </thead>
                    <caption className="px-1">
                      <Link>View Id Proof</Link>
                    </caption>
                  </table>
                  <div className="advocate_home_edit_btn text-center mt-3">
                    <button type="submit">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocateHome;
