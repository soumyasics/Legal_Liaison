import React, { useEffect, useState } from "react";
import img from "../../Assets/adv4.avif";
import icon1 from "../../Assets/profile.png";
import icon2 from "../../Assets/mail.png";
import icon3 from "../../Assets/contact.png";
import icon4 from "../../Assets/house.png";
import icon5 from "../../Assets/location.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";
import { Modal, Button } from "react-bootstrap";

function AdvocateViewSingleRecentCase() {

  const [data, setData] = useState({userId:{},caseId:{datoOfIncident:'',evidence:{filename:''}}});
  const {id} =useParams();
  const navigate =useNavigate();
  const aid=localStorage.getItem('advocateId');
  const [showModal, setShowModal] = useState(false);
  const [evidenceUrl, setEvidenceUrl] = useState('');

      useEffect(() => {
    axiosInstance
      .post(`/getApprovedAppointmentsForAdv/${id}`)
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

  const handleEvidenceClick = () => {
    setEvidenceUrl(`${imageUrl}/${data.caseId.evidence.filename}`);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className="adv_view_case_req">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="adv_view_case_req_action_grps d-flex justify-content-between">
              
              <div className="adv_view_case_req_action_btn d-flex" >
              <i class="ri-upload-2-fill"></i>
                <Link to={'/advocate_addevidence'}><p>Upload Evidence</p></Link>
              </div>
              
              
              <div className="adv_view_case_req_action_btn d-flex" >
              <i class="ri-file-paper-2-line"></i>
                <Link to={'/advocate_update_casestatus'}><p>Add Case Status</p></Link>
              </div>
              <div className="adv_view_case_req_action_btn d-flex" >
              <i class="ri-bank-card-line"></i>
                <Link to={'/advocate_paymentreq'}><p>Request Payment</p></Link>
              </div>
              
            </div>
          </div>

          <div className="row mt-3">
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
              {/* <div className="adv_case_req_left_container2">
              <div className="adv_case_req_left_container1_head">
                <p>Opponent Details</p>
              </div>
              <div className="adv_case_req_left_container1_content">
                <div className="d-flex mt-2">
                  <div className="px-3">Name :</div>
                  <div>{data.caseId.opponentName ? data.caseId.opponentName : 'Unknown'}</div>
                </div>
                <div className="d-flex mt-2">
                  <div className="px-3">Address :</div>
                  <div>{data.caseId.opponentAddress ? data.caseId.opponentAddress : 'Unknown'}</div>
                </div>
              </div>
            </div> */}
            </div>
            <div className="col-7">
              <div className="adv_case_req_right_container">
                <div className="adv_case_req_left_container1_head">
                  <p>Opponent Details</p>
                </div>
                {/* <div className="adv_case_req_left_container1_content">
                <table>
                  <tbody>
                    <tr>
                      <td>Case Title</td>
                      <td>: {data.caseId.title}</td>
                    </tr>
                    <tr>
                      <td>Case Description</td>
                      <td>: {data.caseId.description}</td>
                    </tr>
                    <tr>
                      <td>Case Type</td>
                      <td>: {data.caseId.type}</td>
                    </tr>
                    <tr>
                      <td>Date of Request</td>
                      <td>: {data.caseId.datoOfIncident.slice(0, 10)}</td>
                    </tr>
                    <tr>
                      <td>Evidence</td>
                      <td>: <Link to="#" onClick={handleEvidenceClick}>Click here</Link></td>
                    </tr>
                  </tbody>
                </table>
                
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Evidence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {evidenceUrl.endsWith('.pdf') ? (
            <iframe src={evidenceUrl} width="100%" height="500px" title="Evidence PDF" />
          ) : (
            <img src={evidenceUrl} alt="Evidence" className="img-fluid" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}

export default AdvocateViewSingleRecentCase;
