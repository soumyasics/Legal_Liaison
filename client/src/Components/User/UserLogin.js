import React, { useState } from 'react'
import img2 from "../../Assets/img22.jpeg"
import LandingNavbar from '../LandingPage/LandingNavbar'
import './UserLogin.css'
import { Link } from 'react-router-dom'

function UserLogin() {

    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });


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
    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = {};
        let formIsValid = true;

        errors.email = validateField('Email', data.email);
        errors.password = validateField('Password', data.email);



        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);
        }
    };
    return (
        <div>

<div className="container userlogindiv1">
    <div className="card-header mx-auto  bg-img1">
        <h3 className="mx-auto  userloginformhead d-flex justify-content-center"> User Login  </h3>
    </div>
    <div className="container d-flex flex-row bd-highlight mb-3 userlogindiv2 ">
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input type="text" name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control form-control-lg" placeholder="Username" />
              <div>{errors.email && <div className="text-danger">{errors.email}</div>}</div>

            </div>             
            


            <div className=" form-group">
                <input type="password"
                    value={data.password}
                    onChange={handleChange}
                    name="password" className="form-control form-control-lg userloginform1" placeholder="Password" />
                <div>{errors.password && <div className="text-danger">{errors.password}</div>}</div>
            </div>

            <div className="form-group">
                <input type="submit" name="btn" value="Login" className="btn  btn-outline-danger float-right login_btn userloginbtn" />
            </div>
            <div className='userlogindiv3'>
                Don't have an Account ?
                <Link to='/UserRegistration' > Register here</Link>
            </div>
        </form>
    </div>
</div>






        </div>
    )
}

export default UserLogin