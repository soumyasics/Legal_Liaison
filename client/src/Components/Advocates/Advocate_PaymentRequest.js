import React from 'react'
import './Advocate_PaymentRequest.css'

function Advocate_PaymentRequest() {
  return (
    <div>
        <div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>Payment Request</label>
        </div>
        <div className='payment-card-center'>
        <div class="card card-style-change">
            <div class="card-body">
                <div className='row row-position-adjust'>
                    <div className='col-5'>
                        <p className='payment-name-style'>Category</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <select class="form-select form-select-lg control-border" aria-label="Default select example">
                        <option selected>--Select--</option>
                        <option value="1">Initial Payment</option>
                        <option value="2">Registration Fee</option>
                    </select>
                    </div>
                </div>

                <div className='row row-position-adjust  sep-pading'>
                    <div className='col-5'>
                        <p  className='payment-name-style'>Amount</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <input class="form-control form-control-lg control-border" type="text" aria-label=".form-control-lg example"></input>
                    </div>
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn bg-gold but-move">
                    Send
                  </button>
                  <button type="submit" className="btn bg-gold but-move">
                    Cancel
                  </button>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Advocate_PaymentRequest