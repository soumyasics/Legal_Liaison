import React from "react";
import "./AdvAssignCasesToJnrAdv.css";

function AdvAssignCasesToJnrAdv() {
  return (
    <div className="container">
      <div className="row">
        <div className="adv_assign_cases col-12">
          <div className="adv_assign_cases_case">
            <div className="select-label">Select a Case :</div>
            <div className="select-container w-50">
              <select
                className="form-control-sm specialization-form-select mx-4"
                name="specialization"
              >
                <option value="#" disabled>
                  - Select -
                </option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Civil Law">Civil Law</option>
              </select>
            </div>
          </div>
          <div className="adv_assign_cases_container d-flex">
            <div className="adv_assign_cases_container_head1 ">
              <div className="d-flex justify-content-center align-items-center">
                <h3>Case Details</h3>
              </div>
              <div className="adv_assign_cases_container_content">
                <p>Case Title</p>
                <p>Case Description </p>
                <p>Case Type</p>
                <p>Case Location</p>
                <p>Date of Incident</p>
                <p>Upload Evidence/Documents</p>
              </div>
            </div>
            <div className="adv_assign_cases_container_head2">
              <div className="d-flex justify-content-center align-items-center">
                <h3>Junior Advocate Details</h3>
              </div>
              <div className="adv_assign_cases_container_content">
                <p>Junior advocate name</p>
                <p>No of Cases Attended</p>
                <p>No of Cases Won</p>
                <p>Bar Council Enrollment Number</p>
                <p>Date of Enrollment</p>
                <p>State Bar Council</p>
                <p>Specialisation Areas</p>
                <p>Educational Qualification</p>
              </div>
            </div>
          </div>
          <div className="client-chat-option">
            <input type="checkbox" id="allowClientChat" name="allowClientChat" />
            <label htmlFor="allowClientChat">Allow Client chat</label>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-assign">Assign</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvAssignCasesToJnrAdv;
