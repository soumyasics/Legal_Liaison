import React from 'react'

function Advocate_AddEvidence() {
  return (
    <div>
        <div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>Add Evidence</label>
        </div>
        <div className='payment-card-center'>
        <div class="card card-style-change">
            <div class="card-body">
                <div className='row row-position-adjust'>
                    <div className='col-5'>
                        <p className='payment-name-style'>Evidence Title</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <input class="form-control form-control-lg control-border" type="text" aria-label=".form-control-lg example"></input>
                    </div>
                </div>

                <div className='row row-position-adjust'>
                    <div className='col-5'>
                        <p  className='payment-name-style'>Description</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <input class="form-control form-control-lg control-border" type="text" aria-label=".form-control-lg example"></input>
                    </div>
                </div>

                <div className='row row-position-adjust  sep-pading'>
                    <div className='col-5'>
                        <p  className='payment-name-style'>Upload File</p>
                    </div>
                    <div className='col-2'>
                        <div  className='payment-name-style'>:</div>
                    </div>
                    <div className='col-5'>
                    <input class="form-control form-control-lg control-border" type="file" aria-label=".form-control-lg example"></input>
                    </div>
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn bg-gold but-move">
                    Add
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

export default Advocate_AddEvidence