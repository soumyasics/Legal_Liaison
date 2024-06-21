import React, { useEffect, useState } from "react";
import "./UserAddCases.css";
import img from "../../Assets/adv2.avif";
import { useFormik } from "formik";
import { UserAddCaseSchema } from "../Constants/Schema";
import { toast } from "react-toastify";
import axiosMultipartInstance from "../Constants/FormDataUrl";
import { useNavigate } from "react-router-dom";

function UserAddCases() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  }, [navigate]);

  const [status, setStatus] = useState(true);

  const id = localStorage.getItem("userId");

  const onSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    axiosMultipartInstance
      .post(`/createCase/${id}`, formData)
      .then((res) => {
        if (res.data.status === 200) {
          toast.success("Case Added Successfully");
        } else {
          toast.error("Failed to Add Case");
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      userId: "",
      title: "",
      description: "",
      type: "",
      datoOfIncident: "",
      opponentName: "",
      opponentAddress: "",
      location: "",
      evidence: "",
    },
    validationSchema: UserAddCaseSchema,
    onSubmit,
  });

  return (
    <div className="user_add_cases">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row">
                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Case Title</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.title && touched.title && (
                    <span className="text-danger px-3">{errors.title}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Case Description</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <textarea
                      className="form-control border border-dark mb-2"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.description && touched.description && (
                    <span className="text-danger px-3">
                      {errors.description}
                    </span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Case Type</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <select
                      className="form-select form-control-lg specialization-form-select mb-2"
                      name="type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      <option value="Human Rights Law">Human Rights Law</option>
                      <option value="International Law">
                        International Law
                      </option>
                      <option value="Banking and Finance Law">
                        Banking and Finance Law
                      </option>
                      <option value="Immigration Law">Immigration Law</option>
                      <option value="Health Care Law">Health Care Law</option>
                    </select>
                  </div>
                  {errors.type && touched.type && (
                    <span className="text-danger px-3">{errors.type}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Date of Incident</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="date"
                      className="form-control border border-dark"
                      name="datoOfIncident"
                      value={values.datoOfIncident}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.datoOfIncident && touched.datoOfIncident && (
                    <span className="text-danger px-3">
                      {errors.datoOfIncident}
                    </span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Opposing Party Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      name="opponentName"
                      value={values.opponentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.opponentName && touched.opponentName && (
                    <span className="text-danger px-3">
                      {errors.opponentName}
                    </span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Opposing Party Address</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      name="opponentAddress"
                      value={values.opponentAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.opponentAddress && touched.opponentAddress && (
                    <span className="text-danger px-3">
                      {errors.opponentAddress}
                    </span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Case Location</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.location && touched.location && (
                    <span className="text-danger px-3">{errors.location}</span>
                  )}
                </div>

                <div className="col-6">
                  <div className="user_add_cases_title">
                    <label>Upload Evidence/Document</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-between">
                    <div>: &nbsp;</div>
                    <input
                      type="file"
                      className="form-control border border-dark"
                      name="evidence"
                      onChange={(event) => {
                        setFieldValue("evidence", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                  {errors.evidence && touched.evidence && (
                    <span className="text-danger px-3">{errors.evidence}</span>
                  )}
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn bg-gold">
                    Add Case
                  </button>
                </div>
              </div>
            </form>
          </div>

          {status ? (
            <div className="col-5">
              <div className="user_add_case_sugg_box2">
                <div className="user_add_case_sugg_box1_title text-center">
                  <p>Advocate Suggestions</p>
                </div>
                <div className="user_add_case_sugg_box1_cards mt-4">
                  <div className="user_add_case_sugg_box1_img">
                    <img src={img} alt="advocate_suggestion" />
                  </div>
                  <div className="user_add_case_sugg_box1_details">
                    <p className="user_add_case_sugg_box1_details_name mb-2">
                      Name: Adv. John Doe
                    </p>

                    <p>Name</p>
                    <p className="text-end">
                      <i class="ri-arrow-right-line"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-5">
              <div className="user_add_case_sugg_box2_empty text-center">
                <p>No Suggestions</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAddCases;
