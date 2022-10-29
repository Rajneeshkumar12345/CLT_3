import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import DraftsTwoToneIcon from "@mui/icons-material/DraftsTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import logo from "../images/CodeLoverTech_Logo.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#3bdbd1" }}
        >
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: " #21D192" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a
                href="https://www.facebook.com/CodeLoverTech/"
                target="_blank"
                className="text-white me-4"
              >
                <FacebookOutlinedIcon fontSize="large" />
              </a>
              <a
                href="https://twitter.com/infoRajInfotech"
                target="_blank"
                className="text-white me-4"
              >
                <TwitterIcon  fontSize="large"/>
              </a>

              <a
                href="https://www.instagram.com/codelovertechnology/?hl=en"
                target="_blank"
                className="text-white me-4"
              >
                <InstagramIcon  fontSize="large"/>
              </a>
              <a
                href="https://www.linkedin.com/in/codelover-technology-810724151/"
                target="_blank"
                className="text-white me-4"
              >
                <LinkedInIcon  fontSize="large"/>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-lg-3 col-md-6  mx-auto mb-4">
                  <div className="h6 text-uppercase text-dark fw-bold  footer_heading">
                    CodeLover Technology Pvt. Ltd.
                  </div>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 275px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="photo">
                    <img src={logo} width="250" height="80" />
                  </div>
                 <br></br>
                  <p className="text-dark">
                  CIN: U72900DL2018PTC328015
                  </p>
                  
                  <div className="text-dark mt-4 footer_address">
                    <HomeTwoToneIcon style={{ marginRight: "3px" }} /> 2nd
                    Floor, Mukharjee Tower, Near Mukharjee Nagar, Post office,
                    Mukharjee Nagar, Delhi-110009
                  </div>
                  <br></br>
                  <div className="text-dark footer_address">
                    <DraftsTwoToneIcon style={{ marginRight: "3px" }} />{" "}
                    info@codelovertechnology.com
                  </div>
                  <br></br>
                  <div className="text-dark ">
                    <CallTwoToneIcon style={{ marginRight: "5px" }} />
                    +91-6381996475
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mx-auto mb-4 text-center">
                  <h6 className="text-uppercase text-dark fw-bold footer_heading">
                    Menu
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 50px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/" className="text-dark menu_footer">
                      Home 
                    </Link>
                  </p>
                  <p>
                    <Link to="/About" className="text-dark menu_footer">
                      About us
                    </Link>
                  </p>
                  <p>
                    <Link to="/Service" className="text-dark menu_footer">
                      {" "}
                      Our Services
                    </Link>
                  </p>
                  <p>
                    <Link to="/Projects" className="text-dark  menu_footer">
                      Our Projects
                    </Link>
                  </p>
                  <p>
                    <Link to="/Technology" className="text-dark  menu_footer">
                      Technology
                    </Link>
                  </p>
                  <p>
                    <Link to="/Contact" className="text-dark  menu_footer">
                      Contact
                    </Link>
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold text-dark footer_heading">
                    What we are good at
                  </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 190px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="form-group text-dark">
                    <div>
                      <div className="h6">Software Development</div>
                      <input
                        type="number"
                        placeholder="9.0"
                        style={{ borderTop: "2px dashed red" }}
                      ></input>
                    </div>
                    <div>
                      <div className="h6">ERP/CRM</div>
                      <input
                        type="number"
                        placeholder="9.0"
                        style={{ borderTop: "2px dashed red" }}
                      ></input>
                    </div>
                    <div>
                      <div className="h6">Mobile Apps</div>
                      <input
                        type="number"
                        placeholder="8.0"
                        style={{ borderTop: "2px dashed red" }}
                      ></input>
                    </div>
                    <div>
                      <div className="h6">Digital Marketing</div>
                      <input
                        type="number"
                        placeholder="8.0"
                        style={{ borderTop: "2px dashed red" }}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mx-auto mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0286487778444!2d77.2961187144049!3d28.53885859506681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a996eb0453%3A0x94eb8da0bdb3c025!2sCodeLover%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1665660309764!5m2!1sen!2sin"
                    width="270"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowfullscreeen="true"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center text-white p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 - 2032 CodeLover Technology Pvt Ltd. All Right Reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

{
}




