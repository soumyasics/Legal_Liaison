import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { paymentSchema } from '../Constants/Schema';
import axiosInstance from '../Constants/BaseUrl';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function UserPayAdvReq() {

    const {id}=useParams();
    const navigate=useNavigate();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // getMonth() is zero-based

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ].filter(month => month.value >= currentMonth);
  
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

  const onSubmit = (values) => {
    console.log(values);
    axiosInstance
      .post(`/receivePaymentsById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigate(-1)
          toast.success("Payment Completed");
        } else {
          toast.error("Failed ");
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, isSubmitting } = useFormik({
    initialValues: {
      cardHolderName: '',
      cardNo: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: paymentSchema,
    onSubmit,
  });

  return (
    <div>
      <div className="junior-heading-div container-fluid">
        <label className="junior-reg-title">Pay Now</label>
      </div>
      <div className="payment-card-center">
        <div className="card card-style-change">
          <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="card-body">
              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">Account Holder Name</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <input
                    className="form-control control-border"
                    type="text"
                    name="cardHolderName"
                    value={values.cardHolderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                  {errors.cardHolderName && touched.cardHolderName && (
                    <span className="text-danger">{errors.cardHolderName}</span>
                  )}
                </div>
              </div>
              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">Account Number</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <input
                    className="form-control control-border"
                    type="number"
                    name="cardNo"
                    value={values.cardNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                  {errors.cardNo && touched.cardNo && (
                    <span className="text-danger">{errors.cardNo}</span>
                  )}
                </div>
              </div>
              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">CVV</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <input
                    className="form-control control-border"
                    type="number"
                    name="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                  {errors.cvv && touched.cvv && (
                    <span className="text-danger">{errors.cvv}</span>
                  )}
                </div>
              </div>
              <div className="row row-position-adjust sep-pading">
                <div className="col-5">
                  <p className="payment-name-style">Expiry</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col">
                      <select
                        name="month"
                        className="form-control control-border"
                        value={values.month}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="" label="Month" />
                        {months.map(month => (
                          <option key={month.value} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </select>
                      {errors.month && touched.month && (
                        <span className="text-danger">{errors.month}</span>
                      )}
                    </div>
                    <div className="col">
                      <select
                        name="year"
                        className="form-control control-border"
                        value={values.year}
                        onChange={(e) => {
                          handleChange(e);
                          if (parseInt(e.target.value) > currentYear) {
                            setFieldValue('month', '');
                          }
                        }}
                        onBlur={handleBlur}
                      >
                        <option value="" label="Year" />
                        {years.map(year => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      {errors.year && touched.year && (
                        <span className="text-danger">{errors.year}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn bg-gold but-move" >
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

export default UserPayAdvReq;
