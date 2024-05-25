import React, { useState } from 'react';
import img2 from "../../Assets/adv3.avif";
import './AdvocateLogin.css';
import { Link } from 'react-router-dom';

function AdvocateLogin() {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    let formIsValid = true
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
            formIsValid = false

            return `${fieldName} is required`;
        }
        return '';
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = {};

        errors.email = validateField('Email', data.email);
        errors.password = validateField('Password', data.password);



        setErrors(errors);
console.log("form is valid",formIsValid);
        if (formIsValid) {
            console.log("data", data);
        }
    };

    return (
        <div>
            <div className="container advocatelogindiv1">
                <div className="card-header mx-auto  bg-img1">
                    <h3 className="mx-auto  advocateloginformhead d-flex justify-content-center"> advocate Login  </h3>
                </div>
                <div className="container d-flex flex-row bd-highlight mb-3 advocatelogindiv2 ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Your Email Here"
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className="form-control form-control-lg advocateloginform1"
                                placeholder="Password Here"
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                name="btn"
                                value="Login"
                                className="btn  btn-outline-danger float-right login_btn advocateloginbtn"
                            />
                        </div>
                        <div className='advocatelogindiv3'>
                            Don't have an Account ?
                            <Link to='/AdvcateReg' > Register here</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default AdvocateLogin;
