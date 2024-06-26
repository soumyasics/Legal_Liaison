import React from "react";
import icon from "../../Assets/policeHomeCaseIcon.png";

function AdvocateViewClientPaymentStatus() {
  return (
    <div className="adv_client_payment_status" >
      <div className="container advocate_home_container2 pt-5 pb-5">
        {/* <div className="advocate_home_container2_title mt-3">
                  <p>Recent Case Requests</p>
                </div> */}
        <div className="advocate_home_container2_table table-responsive">
          <table className="table align-center">
            <thead>
              <tr>
                <th scope="col">Payment Info</th>
                <th scope="col">Payment Type</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advance Payment</td>
                <td>Card</td>
                <td>20-04-2222</td>
                <td>
                  <p className="btn btn-outline-danger">pending</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdvocateViewClientPaymentStatus;
