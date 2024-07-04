import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import './Payslip.css';

const PayslipCard = () => {
  const componentRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setShowPopup(true), // Show popup after printing
  });

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col-md-12 payslip-container" ref={componentRef}>
          <div className="text-center lh-4 mb-2">
            <h3 className="fw-bold">PAY SLIP</h3>
            <span className="fw-normal">Payment Slip for the month of January 2024</span>
          </div>
          <div className="d-flex justify-content-end mb-2">
            <small>01/01/24 - 01/15/24 = 15 Days</small>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col">
                <div className="col-md-12">
                  <div>
                    <span className="fw-bold">EFRAIM JAMES B. TALUCOD</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">ID no.</span>
                    <span className="ms-auto fw-bold">12995</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">ORO Branch</span>
                    <span className="ms-auto">OFFICE</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Position</span>
                    <small className="ms-auto">Frontend Developer</small>
                  </div>
                </div>
                <br />
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Daily Rate</span>
                    <small className="ms-auto">750.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Gross</span>
                    <small className="ms-auto">9,750</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Over Time</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Regular Holiday</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Incentive</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Other Income</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="text-center lh-2 mb-0">
                  <h5 className="fw-medium">DEDUCTION</h5>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Absence</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Tardiness</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Undertime</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">SSS</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">PhilHealth</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Pag-Ibig</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Bonding</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Loan</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">Others</span>
                    <small className="ms-auto">0.00</small>
                  </div>
                </div>
              </div>
              <hr className="my-2 w-100" />
              <div className="col-md-12">
                <div className="d-flex align-items-center">
                  <span className="fw-bold">Total Deductions</span>
                  <small className="ms-auto">0.00</small>
                </div>
              </div>
              <br />
              <div className="col-md-12">
                <div className="d-flex align-items-center">
                  <span className="fw-bold">Net Receivable</span>
                  <span className="ms-auto fw-bolder">
                    9,750.00
                    <hr className="my-0 w-100" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-end">
          <button className="btn btn-success" onClick={handlePrint}>Print Payslip</button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-header">
              <h2>Print Complete</h2>
              <button className="close-button" onClick={closePopup}>&times;</button>
            </div>
            <div className="popup-body">
              <p>The payslip has been printed successfully.</p>
            </div>
            <div className="popup-footer">
              <button className="popup-button" onClick={closePopup}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayslipCard;
