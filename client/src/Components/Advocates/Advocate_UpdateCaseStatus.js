import React from 'react'

function Advocate_UpdateCaseStatus() {
  return (
    <div>
         <div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>Case Status</label>
        </div>
        <div className='payment-card-center'>
        <div class="card card-style-change">
            <div class="card-body">
                <div className='row row-position-adjust'>
                    <div className='col-5'>
                        <p className='payment-name-style'>Case Status</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <select class="form-select form-select-lg control-border" aria-label="Default select example">
                        <option selected>--Select--</option>
                        <option value="1">Hearning Status</option>
                        <option value="2">Trial</option>
                        <option value="3">Final Judgement</option>
                    </select>
                    </div>
                </div>

                <div className='row row-position-adjust'>
                    <div className='col-5'>
                        <p  className='payment-name-style'>Data</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <input class="form-control form-control-lg control-border" type="text"></input>
                    </div>
                </div>
                <div className='row row-position-adjust  sep-pading'>
                    <div className='col-5'>
                        <p  className='payment-name-style'>Description</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <textarea class="form-control form-control-lg control-border" rows="3"></textarea>
                    </div>
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn bg-gold but-move">
                    Submit
                  </button>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Advocate_UpdateCaseStatus