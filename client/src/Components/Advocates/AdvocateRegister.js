import React, { useState } from 'react';
import './AdvocateRegister.css';
import axiosMultipartInstance from "../Constants/FormDataUrl";
import { useNavigate } from 'react-router-dom';

function AdvocateRegister() {

  const navigate=useNavigate()

  const [data, setData] = useState({
    name: '',
    dob: '',
    gender: '',
    nationality: '',
    address: '',
    contact: '',
    email: '',
    password: '',
    bcNo: '',
    dateOfEnrollment: '',
    bcState: '',
    specialization: '',
    experience: '',
    qualification: '',
    profilePic: null,
    idProof: null,
  });

  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    gender: '',
    nationality: '',
    address: '',
    contact: '',
    email: '',
    password: '',
    bcNo: '',
    dateOfEnrollment: '',
    bcState: '',
    specialization: '',
    experience: '',
    qualification: '',
    profilePic: '',
    idProof: '',
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
    } else {
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  function validateString(fieldName, value) {
    if(typeof value!=='string'){
      return `${fieldName} is must be a string`
    }
    else if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  }

  function validateField(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  }

  function validateContact(fieldName, value) {
    if (!value.trim()) {
      return `${fieldName} is required`;
    } else if (value.length !== 10) {
      return 'Please enter a valid Contact Number';
    }
    return '';
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};
    let formIsValid = true;

    errors.name = validateString('Full Name', data.name);
    errors.dob = validateField('Date of Birth', data.dob);
    errors.gender = validateField('Gender', data.gender);
    errors.nationality = validateString('Nationality', data.nationality);
    errors.address = validateField('Address', data.address);
    errors.contact = validateContact('Contact', data.contact);
    errors.email = validateField('Email', data.email);
    errors.password = validateField('Password', data.password);
    errors.bcNo = validateField('Bar Council Enrollment Number', data.bcNo);
    errors.dateOfEnrollment = validateField('Date of Enrollment', data.dateOfEnrollment);
    errors.bcState = validateString('State Bar Council', data.bcState);
    errors.specialization = validateField('Specialization Areas', data.specialization);
    errors.experience = validateField('Years of Experience', data.experience);
    errors.qualification = validateString('Educational Qualification', data.qualification);
    errors.profilePic = validateField('Profile Photo', data.profilePic ? data.profilePic.name : '');
    errors.idProof = validateField('ID Proof Document', data.idProof ? data.idProof.name : '');

    setErrors(errors);

    for (let key in errors) {
      if (errors[key]) {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('dob', data.dob);
      formData.append('gender', data.gender);
      formData.append('nationality', data.nationality);
      formData.append('address', data.address);
      formData.append('contact', data.contact);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('bcNo', data.bcNo);
      formData.append('dateOfEnrollment', data.dateOfEnrollment);
      formData.append('bcState', data.bcState);
      formData.append('specialization', data.specialization);
      formData.append('experience', data.experience);
      formData.append('qualification', data.qualification);
      formData.append('files', data.profilePic);
      formData.append('files', data.idProof);

      try {
        const res = await axiosMultipartInstance.post('/registerAdvocate', formData);
        if (res.data.status === 200) {
            alert('Advocate registered successfully');
            navigate('/AdvocateLogin')
        } else {
            alert(`Advocate Registration Failed: ${res.data.msg}`);
        }
    } catch (error) {
        console.error('There was an error!', error);
        alert('Error');
    }
    }
  };

  return (
    <div>
      <div className='heading-div container-fluid'>
        <label className='reg-title'>Advocate Registration Form</label>
      </div>
      <div className='container-fluid bckcolor'>
        <div className='advocateRegistrationmaindiv'>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <div className="row mt-3">
                <div className="col-sm-6 col-lg-6" >
                  <label className="form-label advocateRegistrationlabel">Full Name :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your Full Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Bar Council Enrollment Number :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your Bar Council enrollment number"
                    name="bcNo"
                    value={data.bcNo}
                    onChange={handleChange}
                  />
                  {errors.bcNo && <div className="text-danger">{errors.bcNo}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Date of Birth :</label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dob"
                    value={data.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && <div className="text-danger">{errors.dob}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Date of Enrollment :</label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dateOfEnrollment"
                    value={data.dateOfEnrollment}
                    onChange={handleChange}
                  />
                  {errors.dateOfEnrollment && <div className="text-danger">{errors.dateOfEnrollment}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Gender :</label>
                  <select
                    className="form-select form-control-lg"
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <div className="text-danger">{errors.gender}</div>}
                </div>

                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">State Bar Council :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your State Bar Council"
                    name="bcState"
                    value={data.bcState}
                    onChange={handleChange}
                  />
                  {errors.bcState && <div className="text-danger">{errors.bcState}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Nationality :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your Nationality"
                    name="nationality"
                    value={data.nationality}
                    onChange={handleChange}
                  />
                  {errors.nationality && <div className="text-danger">{errors.nationality}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Specialization Areas :</label>
                  <div className="select-container">
                    <select
                      className="form-select form-control-lg"
                      name="specialization"
                      value={data.specialization}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select your Specialization Area</option>
                      <option value="Criminal Law">Criminal Law</option>
                      <option value="Civil Law">Civil Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Intellectual Property Law">Intellectual Property Law</option>
                      <option value="Environmental Law">Environmental Law</option>
                      <option value="Tax Law">Tax Law</option>
                      <option value="Real Estate Law">Real Estate Law</option>
                      <option value="Constitutional Law">Constitutional Law</option>
                      <option value="Human Rights Law">Human Rights Law</option>
                      <option value="International Law">International Law</option>
                      <option value="TBanking and Finance Law">Banking and Finance Law</option>
                      <option value="Immigration Law">Immigration Law</option>
                      <option value="Health Care Law">Health Care Law</option>
                    </select>
                    {errors.specialization && <div className="text-danger">{errors.specialization}</div>}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
              <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Address :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                  />
                  {errors.address && <div className="text-danger">{errors.address}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Years of Experience :</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter your years of experience"
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                  />
                  {errors.experience && <div className="text-danger">{errors.experience}</div>}
                </div>
              </div>
              <div className="row mt-3">
              <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Contact Number :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your contact number"
                    name="contact"
                    value={data.contact}
                    onChange={handleChange}
                  />
                  {errors.contact && <div className="text-danger">{errors.contact}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Educational Qualification :</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your educational qualification"
                    name="qualification"
                    value={data.qualification}
                    onChange={handleChange}
                  />
                  {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
                </div>
              </div>
              <div className="row mt-3">
              <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Email :</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Profile Photo :</label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    name="profilePic"
                    onChange={handleChange}
                  />
                  {errors.profilePic && <div className="text-danger">{errors.profilePic}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">Password :</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label advocateRegistrationlabel">ID Proof Document :</label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    name="idProof"
                    onChange={handleChange}
                  />
                  {errors.idProof && <div className="text-danger">{errors.idProof}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocateRegister;
