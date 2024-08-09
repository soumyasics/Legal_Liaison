import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';

function Advocate_UpdateCaseStatus() {
  const [data, setData] = useState({ status: '', date: '', description: '' });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axiosInstance
    .post(`/createStatus/${id}`,data)
    .then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        toast.success("Updated Successfully");
        navigate(-1);
      } else {
        toast.error("Failed");
      }
    })
    .catch(() => {
      toast.error("Failed");
    });
  };

  return (
    <div>
      <div className="junior-heading-div container-fluid">
        <label className="junior-reg-title">Case Updates</label>
      </div>
      <div className="payment-card-center">
        <div className="card card-style-change">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">Case Status</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <select
                    className="form-select control-border"
                    aria-label="Default select example"
                    name="status"
                    value={data.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="Hearning Status">Hearing Status</option>
                    <option value="Trial">Trial</option>
                    <option value="Final Judgement">Final Judgement</option>
                  </select>
                </div>
              </div>

              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">Date</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <input
                    className="form-control control-border"
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row row-position-adjust sep-pading">
                <div className="col-5">
                  <p className="payment-name-style">Description</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <textarea
                    className="form-control control-border"
                    rows="3"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn bg-gold but-move">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Advocate_UpdateCaseStatus;
