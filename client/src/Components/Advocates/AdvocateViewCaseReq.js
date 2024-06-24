import React, { useEffect, useState } from "react";
import "./AdvocateViewCaseReq.css";
import img from "../../Assets/adv4.avif";
import icon1 from "../../Assets/profile.png";
import icon2 from "../../Assets/mail.png";
import icon3 from "../../Assets/contact.png";
import icon4 from "../../Assets/house.png";
import icon5 from "../../Assets/location.png";
import axiosInstance from "../Constants/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdvocateViewCaseReq() {

  const [data, setData] = useState({});
  const id =useParams();
  const navigate =useNavigate();
  const aid=localStorage.getItem('advocateId');


  useEffect(() => {
    axiosInstance
      .post(`/getAppointmentReqsById/${aid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setData(res.data.data);
        } else {
          setData({});
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  }, [id]);

  console.log(data);

  const handleAccept = () => {
    axiosInstance
      .post(`/acceptReqbyAdv/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Accepted Successfully");
          navigate('/advocate_viewcasereq')
        } else {
          toast.error("Failed");
        }
      })
      .catch(() => {
        toast.error("Failed");
      });
  };

  const handleReject = () => {
    axiosInstance
      .post(`/rejectReqbyAdv/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Rejected Successfully");
          navigate('/advocate_viewcasereq')
        } else {
          toast.error("Failed");
        }
      })
      .catch(() => {
        toast.error("Failed");
      });
  };

  return (
    <div className="adv_view_case_req">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="adv_case_req_left_container1">
              <div className="adv_case_req_left_container1_head">
                <p>Client Details</p>
              </div>
              <div className="adv_case_req_left_container1_content d-flex">
                <div className="adv_case_req_left_container1_content_img">
                  <img src={img} />
                </div>
                <div>
                  <div className="d-flex mt-2">
                    <div className="px-3">
                      <img src={icon1} alt="icon2" />
                    </div>
                    <div>Name</div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="px-3">
                      <img src={icon2} alt="icon2" />
                    </div>
                    <div>Name</div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="px-3">
                      <img src={icon3} alt="icon2" />
                    </div>
                    <div>Name</div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="px-3">
                      <img src={icon4} alt="icon2" />
                    </div>
                    <div>Name</div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="px-3">
                      <img src={icon5} alt="icon2" />
                    </div>
                    <div>Name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adv_case_req_left_container2">
              <div className="adv_case_req_left_container1_head">
                <p>Opponent Details</p>
              </div>
              <div className="adv_case_req_left_container1_content">
                <div className="d-flex mt-2">
                  <div className="px-3">Name :</div>
                  <div>Name</div>
                </div>
                <div className="d-flex mt-2">
                  <div className="px-3">Address :</div>
                  <div>Name</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="adv_case_req_right_container">
              <div className="adv_case_req_left_container1_head">
                <p>Opponent Details</p>
              </div>
              <div className="adv_case_req_left_container1_content">
                <table>
                  <tr>
                    <td>Case Title</td>
                    <td>: Case Title</td>
                  </tr>
                  <tr>
                    <td>Case Description</td>
                    <td>: Case Title</td>
                  </tr>
                  <tr>
                    <td>Case Type</td>
                    <td>: Case Title</td>
                  </tr>
                  <tr>
                    <td>Date of Request</td>
                    <td>: Case Title</td>
                  </tr>
                  <tr>
                    <td>Evidence</td>
                    <td>: Case Title</td>
                  </tr>
                </table>
                <div className="adv_view_case_req_actions text-center mt-5">
                  <button className="btn bg-gold" onClick={handleAccept} >Accept</button>
                  <button className="btn bg-gold mx-4" onClick={handleReject} >Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocateViewCaseReq;
