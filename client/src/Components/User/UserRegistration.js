import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserRegistration.css';
import img1 from "../../Assets/lawimg9.avif";

function UserRegistration() {
  const [data, setData] = useState({ email: '', 
  password: '',
  fname: '',
  lname: '',
  contact: '' });
  const [errors, setErrors] = useState({ email: '', password: '',
  fname: '',
  contact: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  };

  const handleContactValidation = () => {
    setErrors(prevErrors => ({
      ...prevErrors,
      contact: validateContact('Contact', data.contact)
    }));
  };
  const validateContact = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 10) {
      return `Please enter a valid Contact Number (10 digits)`;
    }
    return '';
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};
    let formIsValid = true;

    errors.email = validateField('Email', data.email);
    errors.password = validateField('Password', data.password);
    errors.fname = validateField('First Name', data.fname);
    errors.contact = validateField('Contact Number', data.contact);

    setErrors(errors);

    if (formIsValid) {
      console.log("data", data);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='userRegistrationmaindiv'>
          <div className='userRegistrationimgdiv'>
            <img src={img1} className='userRegistrationimgdiv' alt="Registration" />
          </div>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <h2 className="userRegistrationtitle">Registration Form</h2>
              <div className="row">
                <div className="col-3">
                  <label className="form-label userRegistrationlabel">First Name </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name Here"
                    name="fname"
                    value={data.fname}
                    onChange={handleChange}
                  />
                                    {errors.fname && <div className="text-danger">{errors.fname}</div>}

                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="form-label userRegistrationlabel">Last Name </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name Here"
                    name="lname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="form-label userRegistrationlabel">Email </label>
                </div>
                <div className="col-9">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-3">
                  <label className="form-label userRegistrationlabel">Contact Number</label>
                </div>
                <div className="col-9">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Contact Number"
                    name="contact"
                    value={data.contact}
                    onChange={handleChange}
                    onBlur={handleContactValidation} // Add onBlur for contact
                  />
                  {errors.contact && <div className="text-danger">{errors.contact}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="form-label userRegistrationlabel">Password </label>
                </div>
                <div className="col-9">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <button type="submit" className="btn btn-secondary userRegistrationbutton mt-3">
                  Register
                </button>
                <div className='userRegistrationdivlast'>Already have an account?
                  <Link to='/UserLogin' className='userRegistrationdivlink'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login Now</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
