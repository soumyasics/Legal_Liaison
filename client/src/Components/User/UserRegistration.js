// UserRegistration.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./UserRegistration.css";
import img from '../../Assets/userRegPic.png';
import axiosInstance from "../Constants/BaseUrl";
import { UserRegistrationSchema } from "../Constants/Schema";
import { toast } from "react-toastify";
 
function UserRegistration() {
    const navigate = useNavigate();


    const [isToastVisible, setToastVisible] = useState(false);

    const onSubmit = (values) => {
        console.log(values);

        axiosInstance.post('/registerUser', values)
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    if (!isToastVisible) {
                        setToastVisible(true);
                        toast.success("Registration Successful", {
                            onClose: () => setToastVisible(false),
                        });
                    }
                    navigate('/UserLogin');
                } else if (res.data.status === 409) {
                    if (!isToastVisible) {
                        setToastVisible(true);
                        toast.warning(res.data.msg, {
                            onClose: () => setToastVisible(false),
                        });
                    }
                } else {
                    if (!isToastVisible) {
                        setToastVisible(true);
                        toast.error('Registration Failed', {
                            onClose: () => setToastVisible(false),
                        });
                    }
                }
            })
            .catch(() => {
                if (!isToastVisible) {
                    setToastVisible(true);
                    toast.error('Registration Failed', {
                        onClose: () => setToastVisible(false),
                    });
                }
            });
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                name: "",
                contact: "",
                email: "",
                password: "",
                state: "",
                district: "",
                city: "",
            },
            validationSchema: UserRegistrationSchema,
            onSubmit,
        });

    return (
        <div className="user_registration">
            <div className="user_registration_container">
                <div className="user_registration_box1">
                    <div className="user_registration_input_group">
                        <form onSubmit={(e)=>{handleSubmit(e)}}>
                            <div className="user_registration_input">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && (
                                    <span className="text-danger">{errors.name}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control border border-dark"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && (
                                    <span className="text-danger">{errors.email}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Contact</label>
                                <input
                                    type="number"
                                    className="form-control border border-dark"
                                    placeholder="Enter your contact"
                                    name="contact"
                                    value={values.contact}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.contact && touched.contact && (
                                    <span className="text-danger">{errors.contact}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>City</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your city"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.city && touched.city && (
                                    <span className="text-danger">{errors.city}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>State</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your state"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.state && touched.state && (
                                    <span className="text-danger">{errors.state}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>District</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your district"
                                    name="district"
                                    value={values.district}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.district && touched.district && (
                                    <span className="text-danger">{errors.district}</span>
                                )}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control border border-dark"
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && (
                                    <span className="text-danger">{errors.password}</span>
                                )}
                            </div>
                            <div className="user_registration_button text-center mt-3">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="user_registration_box2">
                    <img src={img} className="img-fluid" alt="user_reg_img" />
                </div>
            </div>
        </div>
    );
}

export default UserRegistration;
