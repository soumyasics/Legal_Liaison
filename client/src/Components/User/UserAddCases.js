import React, { useState } from "react";
import "./UserAddCases.css";
import img from "../../Assets/adv2.avif";

function UserAddCases() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <div className="user_add_cases">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Case Title</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="text"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Case Description</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <textarea
                        type="text"
                        class="form-control border border-dark mb-2"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Case Type</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <select
                        className="form-select form-control-lg specialization-form-select mb-2"
                        name="specialization"
                      >
                        <option value="" disabled>
                          Select your Specialization Area
                        </option>
                        <option value="Criminal Law">Criminal Law</option>
                        <option value="Civil Law">Civil Law</option>
                        <option value="Family Law">Family Law</option>
                        <option value="Corporate Law">Corporate Law</option>
                        <option value="Intellectual Property Law">
                          Intellectual Property Law
                        </option>
                        <option value="Environmental Law">
                          Environmental Law
                        </option>
                        <option value="Tax Law">Tax Law</option>
                        <option value="Real Estate Law">Real Estate Law</option>
                        <option value="Constitutional Law">
                          Constitutional Law
                        </option>
                        <option value="Human Rights Law">
                          Human Rights Law
                        </option>
                        <option value="International Law">
                          International Law
                        </option>
                        <option value="TBanking and Finance Law">
                          Banking and Finance Law
                        </option>
                        <option value="Immigration Law">Immigration Law</option>
                        <option value="Health Care Law">Health Care Law</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Date of Incident</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="date"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Opposing Party Name</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="text"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Opposing Party Address</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="text"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Case Location</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="text"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="user_add_cases_title">
                      <label>Upload Evidence/Document</label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-between">
                      <div>: &nbsp;</div>
                      <input
                        type="file"
                        class="form-control border border-dark"
                        id="exampleFormControlInput1"
                        name="fname"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {status ? (
              <div className="col-5">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="user_add_case_sugg_box2">
                        <div className="user_add_case_sugg_box1_title text-center">
                          <p>Advocate Suggestions </p>
                        </div>
                        <div className="user_add_case_sugg_box1_cards mt-4">
                          <div className="user_add_case_sugg_box1_img">
                            <img src={img} />
                          </div>
                          <div className="user_add_case_sugg_box1_details">
                            <p className="user_add_case_sugg_box1_details_head">
                              Name
                            </p>
                            <p>Name</p>
                            <p className="text-end">
                              <i class="ri-arrow-right-line"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-4">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="user_add_case_sugg_box1">
                        <div className="user_add_case_sugg_box1_title">
                          <p>Advocate Suggestions </p>
                        </div>
                        <div className="user_add_case_sugg_box1_content">
                          <p>
                            Please enter your case details completely to receive
                            the most updated suggestions for advocates.
                            Providing comprehensive information about your case
                            will help us match you with the best legal
                            professionals suited to your specific needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddCases;
