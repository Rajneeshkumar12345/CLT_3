import React, { useEffect } from "react";
import "./Contact.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact page - CodeLover Technology Pvt Ltd";
  });
  return (
    <>
      <div className="row" id="contatti" style={{ marginTop: "0rem" }}>
        {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
        <div className="container mt-5 p-5">
          <div className="row" style={{ height: "550px" }}>
            <div className="col-md-6 maps" style={{ marginTop: "25px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14024.645830202722!2d77.297967!3d28.50478965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665217887296!5m2!1sen!2sin"
                width="300"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                style={{ border: "0" }}
                allowfullscreeen="true"
              ></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold ">
                CONTACT US
              </h2>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group ">
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="FirstName"
                        required
                        style={{ backgroundColor: "#f59fd5" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="LastName"
                        required
                        style={{ backgroundColor: "#f59fd5" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="Email"
                        required
                        style={{ backgroundColor: "#f59fd5" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Phone"
                        required
                        style={{ backgroundColor: "#f59fd5" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control mt-2"
                        id="exampleFormControlTextarea1"
                        placeholder="Messege"
                        rows="3"
                        required
                        style={{ backgroundColor: "#f59fd5" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label
                          className="form-check-label check"
                          htmlFor="invalidCheck2"
                        >
                          Check me out
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-dark">
                <h2 className="text-uppercase mt-4 font-weight-bold">
                  CodeLover Technology
                </h2>
                <LocalPhoneIcon fontSize="medium" />{" "}
                <a href="tel:+" style={{ Color: " #21D192" }}>
                  (+91-6381996475)
                </a>
                <br></br>
                <br></br>
                <DraftsRoundedIcon fontSize="medium" />{" "}
                <a href="">info@codelovertechnology.com</a>
                <br></br>
                <br></br>
                <h5>Registered Office:-</h5>
                <p className="Address1" style={{color:'rgba(17, 18, 17, 1)', font:"icon", fontWeight:"50px"}}>
                <HomeRoundedIcon fontSize="medium" /> 2nd Floor, Mukharjee
                Tower, Near Mukharjee Nagar, Post office, Mukharjee Nagar,
                Delhi-110009
                </p>
                <h5>Corporate Office:-</h5>
                <p style={{color:'rgba(17, 18, 17, 1)', font:"icon", fontWeight:"50px"}}>
                <HomeRoundedIcon fontSize="medium" /> D-17, 3rd Floor, Bareja
                Sadan, Near Jaitpur Mod, Badarpur Border, New Delhi-110044
                </p>
               
                {/* <div className="my-4">
                  <a href="">
                    <i className="fab fa-facebook fa-3x pr-4"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center bg-success text-white" id="author">
        <div className="col-12 mt-4 h3 ">
          <a href="#">CodeLover Technology Pvt. Ltd.</a>
        </div>
        <div className="col-12 my-2">
       
          <a
            href="https://www.linkedin.com/in/codelover-technology-810724151/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
