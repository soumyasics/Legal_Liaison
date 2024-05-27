import * as yup from 'yup';

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol

export const LoginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

export const AdminSchema = yup.object().shape({
    email: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    password: yup.string().required("Required"),
  });

export const UserRegistrationSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be 10 digit number").max(9999999999, "Phone number must be 10 digit number").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    state: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),

})

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});