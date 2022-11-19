import React from "react";
import "./DigitalSignature.css";
import Class3 from "../images/Class3.png";

function DigitalSignature() {
  return (
    <>
      <div className="Digital_Signature">
        <div className="container DG py-5">
          <h2 className="text-center py-5 text-white">Apply for Certificate</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12 text-white">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <h6>Certificate for:-</h6>
                </div>
                <div className="col-md-6 col-sm-6">
                  <select
                    class="form-select"
                    required
                    aria-label="select example"
                  >
                    <option value="">Subscriber</option>
                    <option value="1">DGFT</option>
                    <option value="2">Combo</option>
                    <option value="3">Special Purpose</option>
                  </select>
                  <div class="invalid-feedback">Invalid Select</div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 col-sm-6">
                  <h6>Certificate Type:-</h6>
                </div>
                <div className="col-md-6 col-sm-6">
                  <select
                    class="form-select"
                    required
                    aria-label="select example"
                  >
                    <option value="">Signature</option>
                    <option value="1">Encryption</option>
                    <option value="2">Both</option>
                  </select>
                  <div class="invalid-feedback">Invalid Select</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-white">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <h6>User Type:-</h6>
                </div>
                <div className="col-md-6 col-sm-6">
                  <select
                    class="form-select"
                    required
                    aria-label="select example"
                  >
                    <option value="">Individual</option>
                    <option value="1">Organization</option>
                    <option value="2">Foreign Individual</option>
                    <option value="3">Foreign Organization</option>
                  </select>
                  <div class="invalid-feedback">Invalid Select</div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 col-sm-6">
                  <h6>Validity:-</h6>
                </div>
                <div className="col-md-6 col-sm-6 d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      1 Yr
                    </label>
                  </div>
                  <div class="form-check ms-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      2 Yrs
                    </label>
                  </div>
                  <div class="form-check ms-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      3 Yrs
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button text-center mt-5">
            <a>
              <button className="btn btn-primary btn-lg">Submit</button>
            </a>
            <a href="/Service">
              <button className="btn btn-light ms-4 btn-lg">Cancel</button>
            </a>
          </div>
          <hr className="line_Dg"></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3 className="text-center text-white">
                What Is Class 3 Digital Signature ?
              </h3>
              <div className="Class3_Text">
                <p>
                  A digital signature is equivalent to a paper / handwritten
                  signature in an electronic form that confirms the identity of
                  the sender for online information. It comes with a USB token
                  that looks like a pen drive, in which the signature is stored
                  and can be used with a computer. It is a multipurpose DSC
                  mostly used on a government portal for authentication and
                  verification of users.
                </p>
                <br></br>
                <p>
                  <span style={{color:"#910311", fontSize:"20px", fontWeight:"700"}}>Class 3 DSC</span> is the highest level of the certificates. This
                  certificate provides high security in online transactions. It
                  is issued by a licensed certifying authority. It is mostly
                  used for GST, ITR, MCA filing, Company Incorporation,
                  Trademark, and IPR registration, EPFO works.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="Class_image">
                <img src={Class3} className="img-fluid Class_image" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 text-white Class-3_Text mt-5">
            Class-3 / Individual / 2 Years - 1100Rs. ( Without E-Token)-
            <a href="https://rzp.io/l/z1lpAjfWFm" target="_blank">
              <button className="btn btn-primary ms-4">Buy Now</button>
            </a>
          </div>
          <div className="col-md-12 col-sm-12 text-white Class-3_Text py-5">
            Class-3 / Individual / 3 Years - 1500Rs. ( With E-Token )-
            <a href="https://rzp.io/l/Hbw3mwJ7g" target="_blank">
              <button className="btn btn-primary ms-5">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalSignature;
