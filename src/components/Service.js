import React, { useEffect } from "react";
import hosting from "../images/web-hosting4.jpg";
import custom from "../images/Custom_Software_Development.jpg";
import "./service.css";
import Consulting from "../images/Consulting.jpg";
import Technology from "../images/Technology.jpg";
import Outsourcing from "../images/Outsourcing.jpg";
import IT_Support from "../images/IT_Support.webp";
import Web from "../images/Web.webp";
import MobileApp from "../images/MobileApp.png";
import Backup from "../images/Backup.jpg";
import SSL from "../images/SSL.png";
import Signature from "../images/Signature.png";
import Portal from "../images/Portal.png";
import business from "../images/business.png";
import Reaserch from "../images/Reaserch.png";

import ReactReadMoreReadLess from "react-read-more-read-less";
import { Laptop } from "@mui/icons-material";
import Hosting_Side_Image from "../images/Hosting_Side_Image.png";

function Service() {
  useEffect(() => {
    document.title = "Service page - CodeLover Technology Pvt Ltd";
  });

  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;

  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  // const displayRazorpay = async (amount) => {
  //   const res = await loadScript(
  //     "https://rzp.io/i/eOPbBOntOO"
  //   );

  //   if (!res) {
  //     alert("You are offline.....Failed to load ");
  //     return;
  //   }
  // };
  return (
    <>
      <div className="body-content" style={{ backgroundColor: "#b8d0d1" }}>
        {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
        <div className="container" style={{ marginTop: "0rem" }}>
          <div className="row">
            <div className="col-md-12 col-sm-12 ">
              <h1
                className="Service-title text-center"
                style={{ marginTop: "5rem" }}
              >
                CODELOVER <span style={{ color: "#d60909" }}>TECHNOLOGY</span>{" "}
                SERVICES
              </h1>
              <p className="service_justify mt-3">
                <b>CodeLover Technology</b> is a global IT company with a proven
                track record of excellence in software-consulting, outsourcing
                and digital solutions.
              </p>
              <p className="service_justify">
                Having worked for more than a decade, we have gained
                unparalleled experience and developed comprehensive capabilities
                &amp; expertise across a wide variety of functions and
                industries.
              </p>
              <p className="service_justify">
                We partner with companies to fulfill their ever evolving IT
                needs and support their business with our enabling solutions.
              </p>
              <p className="service_justify">
                Our team of professional constantly work to create personalized,
                end-to-end solutions to serve the dynamic requirements of our
                clients.
              </p>
            </div>
          </div>
          <div id="service">
            <div style={{ width: "100%", margin: "0px 0px 50px 0px" }}>
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <h2 className="feature_title py-3 ">
                  CUSTOM SOFTWARE DEVELOPMENT
                </h2>
              </div>
              <div className="row">
                <div
                  className="col-md-3 col-sm-12"
                  style={{ backgroundColor: "#c7f5c1", borderRadius: "10px" }}
                >
                  <h5 className="text-center mt-3 software_heading2">
                    SOFTWARE SERVICES
                  </h5>
                  <ul
                    className="nav nav-tabs tabs-left Software_Content"
                    role="tablist"
                  >
                    <li className="List-Development">Consultany Services</li>
                    <li className="List-Development">Technology Services</li>
                    <li className="List-Development">Outsourcing Services</li>
                    <li className="List-Development">IT Support Services</li>
                    <li className="List-Development">Website and Portals</li>
                    <li className="List-Development">Hosting</li>
                    <li className="List-Development">Web Designing</li>
                    <li className="List-Development">Mobile Application</li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12 mt-2">
                  <img
                    src={custom}
                    className="img-fluid h-100"
                    alt="software-development"
                    // width="350"
                    //  height="350"
                  />
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12 mt-2">
                  <div className="Ser_Cont">
                    <p>
                      CodeLover Technology is a global IT company with a proven
                      track record of excellence in software-consulting,
                      outsourcing and digital solutions. Having worked for more
                      than a decade, we have gained unparalleled experience and
                      developed comprehensive capabilities &amp; expertise
                      across a wide variety of functions and industries.
                    </p>
                    <p>
                      We partner with companies to fulfill their ever evolving
                      IT needs and support their business with our enabling
                      solutions.
                    </p>
                    <p>
                      Our team of professional constantly work to create
                      personalized, end-to-end solutions to serve the dynamic
                      requirements of our clients.
                    </p>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ borderRadius: "15px" }}>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1 className="section-title text-center text-uppercase">
                {" "}
                <span style={{ color: "#e30707", font: "bold" }}>WEB</span>{" "}
                HOSTING
              </h1>
            </div>
          </div>

          <section class="research-wrapp gap-top">
            <div class="container">
              <div class="row">
                <div class="col-md-4 research-cnt-block-wrapp">
                  <div class="research-cnt-block" id="research">
                    <p
                      style={{
                        textAlign: "left",
                        fontSize: "25px",
                        fontWeight: "500",
                      }}
                    >
                      <strong>What is Web Hosting ?</strong>
                    </p>
                    <p class="mb-0 Web_Hosting_Content">
                      <span
                        style={{
                          color: "#1208a1",
                          fontSize: "25px",
                          fontWeight: "500",
                        }}
                      >
                        Web hosting
                      </span>{" "}
                      is an online service that makes your website’s content
                      accessible on the internet. When you purchase a hosting
                      plan, you are renting space on a physical server to store
                      all the website’s files and data.
                    </p>
                    <br></br>
                    <p class="mb-0 Web_Hosting_Content">
                      Web hosts provide the hosting technology and resources
                      required for the effective and secure operation of your
                      website. They are responsible for keeping the server up
                      and running, implementing security measures, and ensuring
                      that data such as texts, photos, and other files are
                      transferred successfully to the visitors’ browsers.
                    </p>
                  </div>
                </div>
                <div class="col-md-3 research-title-block-wrapp text-center">
                  <div class="res-title-block">
                    <div class="research-title blue-text" id="res_link_0">
                      -Types Of Hosting-
                    </div>
                    <div class="research-sub-title-block mt-3">
                      <div class=" reserach-sub-title shared_hosting">
                        Shared hosting.{" "}
                        <span className="tooltiptext">
                          Silicon House, <br></br>Go Daddy, Hostinger
                        </span>
                      </div>

                      <div class="reserach-sub-title " id="res_link_2">
                        VPS hosting.
                      </div>

                      <div
                        class="reserach-sub-title  Dedicated_hosting"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        id="res_link_3"
                      >
                        Dedicated hosting.{" "}
                        <span className="tooltip_Dedicated">
                          AWS, <br></br> Microsoft, <br></br> Go Daddy,{" "}
                          <br></br> Hostinger
                        </span>
                      </div>

                      <div class="reserach-sub-title " id="res_link_4">
                        Managed hosting.
                      </div>

                      <div class="reserach-sub-title " id="res_link_5">
                        Cloud hosting.
                      </div>
                      <div class="reserach-sub-title " id="res_link_6">
                        Colocation.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="resaerch-image-block-wrapp col-md-5">
                  <div class="research-image-block" id="research_image" />
                  <img src={Hosting_Side_Image} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            {/* First container of Technology */}
            <div className="hosting"></div>
            <div className="col-md-12 col-sm-12 mb-3  mt-5 Hosting_image text-center">
              <div className="hover hover-4 text-white rounded ">
                <img src={hosting} alt="" className="fluid" />
              </div>
            </div>

            <div className="col-md-12 col-sm-12  mb-3 mb-lg-0 text-white Technology_content Last_content">
              <div className="Ser_Cont" id="WebHosting">
                <p
                  className="text-dark mt-3"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  We create corporate web portals and intranets to help
                  established enterprises benefit from collaboration and
                  document management.
                </p>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <h1 className="section-title text-center text-uppercase">
                    {" "}
                    <span style={{ color: "#e30707", font: "bold" }}>
                      Hosting
                    </span>{" "}
                    Plans
                  </h1>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-bordered table-responsive">
                        <thead>
                          <tr>
                            <td id="Starter" style={{ background: "#06d46a" }}>
                              <h2>Starter</h2>
                            </td>
                            <td id="Advanced" style={{ background: "#04c7c0" }}>
                              {" "}
                              <h2>Advanced</h2>
                            </td>
                            <td id="Business" style={{ background: "#f28ab2" }}>
                              <h2>Business</h2>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr></tr>
                          <tr>
                            <td>
                              <p>1 Domain</p>
                            </td>
                            <td>
                              <p>10 Domain</p>
                            </td>
                            <td>
                              <p>Unlimited Domain</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p>5 SubDomain</p>
                            </td>
                            <td>
                              <p>50 SubDomain</p>
                            </td>
                            <td>
                              <p>Unlimited SubDomain</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p>SSL Certificate ( Zero SSL )</p>
                            </td>
                            <td>
                              <p> No SSL </p>
                            </td>
                            <td>
                              <p> NO SSL</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p>1 GB Space</p>
                            </td>
                            <td>
                              <p> Unlimited Space</p>
                            </td>
                            <td>
                              <p>Unlimited Space</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p> 3 - 5 Official Mail Id </p>
                            </td>
                            <td>
                              <p>Unlimited Mail Id</p>
                            </td>
                            <td>
                              <p>Unlimited Mail Id</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p> 1 SQL Database (250 Mb) </p>
                            </td>
                            <td>
                              <p>10 SQL Database </p>
                            </td>
                            <td>
                              <p>As Per Domain</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p> 3 MYSQL Database </p>
                            </td>
                            <td>
                              <p>Unlimited</p>
                            </td>
                            <td>
                              <p>Unlimited</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p> cPanel</p>
                            </td>
                            <td>
                              <p>Unlimited</p>
                            </td>
                            <td>
                              <p>cPanel with Admin and Subuser too</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p> Bandwidth - 1TB </p>
                            </td>
                            <td>
                              <p>Unlimited</p>
                            </td>
                            <td>
                              <p>Unlimited</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <h4>
                                <i className="fa fa-inr"></i> 600 (Valid:- 1
                                Year)
                              </h4>
                            </td>
                            <td>
                              <h4>
                                <i className="fa fa-inr"></i> 2000 (Valid:- 1
                                Year)
                              </h4>
                            </td>
                            <td>
                              {" "}
                              <h4>
                                <i className="fa fa-inr"></i> 3500 (Valid:- 1
                                Year)
                              </h4>
                            </td>
                          </tr>
                          <tr></tr>
                          <tr>
                            <td>
                              <a
                                href="https://razorpay.com/payment-link/plink_KhTZHYg7g8D8fF"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="btn btn-success"

                                  // onClick={() => displayRazorpay()}
                                >
                                  Buy Plan
                                </button>
                              </a>
                            </td>
                            <td>
                              <a
                                href="https://rzp.io/i/n7PSdtLmB"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="btn btn-success"

                                  // onClick={() => displayRazorpay()}
                                >
                                  Buy Plan
                                </button>
                              </a>
                            </td>
                            <td>
                              <a
                                href="https://rzp.io/i/Y2IL9QX"
                                target="_blank"
                              >
                                <button
                                  type="button"
                                  className="btn btn-success"

                                  // onClick={() => displayRazorpay()}
                                >
                                  Buy Plan
                                </button>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <p className="AdmiCpan text-center py-2 bg-dark">With cPanel</p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          {/* </div> */}
        </div>

        <div className="container py-5">
          <div
            className="Technology"
            style={{
              marginTop: "0rem",
              backgroundColor: "#06769e",
              borderRadius: "10px",
            }}
          >
            <div className="container ">
              <div className="py-3">
                {/* <h1 className="text-center my-3">
                  <span style={{ color: "#05f70d" }}>Mobile</span> Technologies
                </h1> */}
                <div className="row">
                  {/* First container of Technology */}

                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                    <div className="hover hover-4 text-white rounded ">
                      <img src={Consulting} alt="consulting" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#c41073" }}
                          >
                            Consultancy{" "}
                          </span>
                          Services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-6 col-sm-12  mb-3 mb-lg-0 text-white Technology_content Last_content"
                    style={{ marginTop: "30px" }}
                  >
                    We empower clients with our expert IT consulting and
                    strategic recommendations that transform overall
                    productivity and profitability of their business processes.
                    VertexPlus partners with your in-house technical teams to
                    design, develop and implement IT solutions in line with your
                    unique transformation needs. From planning & strategy to
                    conclusive implementation, our broad spectrum of IT
                    consulting includes collaborative counseling on traditional
                    technologies and integration with emerging domains and new
                    frameworks. With our vast industry experience and global
                    insights, we help you plan and develop agile strategies and
                    IT solutions to best suit your organizational architecture
                    and business needs. Working with your business’ software
                    teams, our qualified professionals help strategize, build
                    and renovate your processes and approach for maximizing time
                    bound competitive results.
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={
                        <button className="btn btn-dark">Read More ▼</button>
                      }
                      readLessText={
                        <button className="btn btn-dark">Read Less ▲</button>
                      }
                    >
                      Modern businesses attach great importance to the
                      increasing value of data led insights. Our consulting on
                      Analytics & reporting aims to develop an efficient
                      information system that provides well integrated & well
                      analyzed information, required for better decision making
                      at all levels. By recommending systematic appraisal for
                      input data, we help you devise complete information
                      strategy including analytics & reporting to add value in
                      the process and performance management. Primarily, we
                      endeavor to maximize your productivity while reducing
                      costs with lean and efficient, and actionable information.
                    </ReactReadMoreReadLess>
                  </div>
                </div>

                {/* Second container of about */}
                <div className="row mt-5">
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                    style={{ marginTop: "10px" }}
                  >
                    We have been developing custom applications to help clients
                    in optimizing operational procedures for enhanced results
                    and overall productivity.
                  </div>
                  {/* About Item */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="hover hover-4 text-white rounded">
                      <img src={Technology} alt="" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#1fc410" }}
                          >
                            technology{" "}
                          </span>
                          services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd container */}

            <div className="container ">
              <div className="py-3">
                {/* <h1 className="text-center my-3">
                  <span style={{ color: "#05f70d" }}>Internet</span>{" "}
                  Technologies
                </h1> */}
                <div className="row">
                  {/* Third container of Technology */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                    <div className="hover hover-4 text-white rounded ">
                      <img src={Outsourcing} alt="outsourcing" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#c41073" }}
                          >
                            outsourcing{" "}
                          </span>
                          services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Technology_content Last_content"
                    style={{ marginTop: "40px" }}
                  >
                    <ReactReadMoreReadLess
                      charLimit={700}
                      readMoreText={
                        <button className="btn btn-dark">Read More ▼</button>
                      }
                      readLessText={
                        <button className="btn btn-dark">Read Less ▲</button>
                      }
                    >
                      With more than nine years of experience in meeting human
                      resource requirements, our efforts have proved highly
                      resourceful for different organizational needs. By
                      employing the most meticulous methods of short-listing
                      candidates, segregating precise framework of skills,
                      orientation and experience; we strive to bring the best
                      options for different IT staffing needs. We thoroughly
                      analyze the employment requirements, contemplate
                      departmental framework and relate it with the job
                      description. This helps us in selecting the most suited
                      resource with right skill-set that precisely fits the job
                      requirements. Contract Hiring is one of the most sought
                      after services in our gamut of Human Resource Outsourcing.
                      We have a team of competent professionals who can work
                      dedicatedly on contractual basis for you in line with the
                      contract. What makes us best in this department is our
                      ability to offer most compatible and result-oriented
                      solutions for your unique hiring needs. Over the years,
                      many IT organizations (including renowned corporate
                      groups), have been subscribing our contract hiring as it
                      saves a lot of indirect cost of maintaining employees and
                      also relieves them from hassles of managing salaries,
                      insurance, benefits and appraisals etc. It also offers
                      them flexibility of renewing the term or shifting, adding
                      resources to adjust their operations in dynamic business
                      environment.
                    </ReactReadMoreReadLess>
                  </div>
                </div>

                {/*fourth container of about */}
                <div className="row mt-5">
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                    style={{ marginTop: "30px" }}
                  >
                    Our technical support and maintenance services are fully
                    equipped to enhance & maintain technical efficiency, reduce
                    system downtime and ensure.
                  </div>
                  {/* About Item */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="hover hover-4 text-white rounded">
                      <img src={IT_Support} alt="" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#1fc410" }}
                          >
                            it support{" "}
                          </span>
                          services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="py-3">
                {/* <h1 className="text-center my-3">
                  <span style={{ color: "#05f70d" }}>Internet</span>{" "}
                  Technologies
                </h1> */}
                <div className="row">
                  {/* Third container of Technology */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                    <div className="hover hover-4 text-white rounded ">
                      <img src={Web} alt="web design" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#c41073" }}
                          >
                            web designing{" "}
                          </span>
                          services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Technology_content Last_content"
                    style={{ marginTop: "40px" }}
                  >
                    IT Division within organizations need some 30-40 skills to
                    management operations in smooth way. Most of the time these
                    skills.
                  </div>
                </div>

                {/*fourth container of about */}
                <div className="row mt-5">
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                    style={{ marginTop: "30px" }}
                  >
                    We specialize in development of Mobile Applications Native
                    or Hybrid Technologies as suitable to given...
                  </div>
                  {/* About Item */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="hover hover-4 text-white rounded">
                      <img src={MobileApp} alt="" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#1fc410" }}
                          >
                            Mobile Application{" "}
                          </span>
                          services{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="py-3">
                {/* <h1 className="text-center my-3">
                  <span style={{ color: "#05f70d" }}>Internet</span>{" "}
                  Technologies
                </h1> */}
                <div className="row">
                  {/* Third container of Technology */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                    <div className="hover hover-4 text-white rounded ">
                      <img src={Backup} alt="" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#c41073" }}
                          >
                            Data Backup &{" "}
                          </span>
                          Recovery{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Technology_content Last_content"
                    style={{ marginTop: "40px" }}
                  >
                    With more than nine years of experience in meeting human
                    resource requirements, our efforts have proved highly
                    resourceful for different organizational.
                  </div>
                </div>

                {/*fourth container of about */}
                <div className="row mt-5">
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                    style={{ marginTop: "30px" }}
                  >
                    An SSL certificate is a digital certificate that
                    authenticates a website's identity and enables an encrypted
                    connection. SSL stands for Secure Sockets Layer, a security
                    protocol that creates an encrypted link between a web server
                    and a web browser.
                  </div>
                  {/* About Item */}
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="hover hover-4 text-white rounded">
                      <img src={SSL} alt="ssl_image" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#1fc410" }}
                          >
                            SSL{" "}
                          </span>
                          Certificate{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="py-3">
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                    <div className="hover hover-4 text-white rounded ">
                      <img src={Signature} alt="signature-image" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#c41073" }}
                          >
                            Digital{" "}
                          </span>
                          Signature{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Technology_content Last_content"
                    style={{ marginTop: "40px" }}
                  >
                    <p>A Digital Signature Certificate is a secure digital
                    key that is issued by the certifying authorities for the
                    purpose of validating and certifying the identity of the
                    person holding this certificate. Digital Signatures make use
                    of the public key encryptions to create the signatures.</p>
                    <p>
                      Digital signatures can provide evidence of origin,
                      identity and status of electronic documents, transactions
                      or digital messages. Signers can also use them to
                      acknowledge informed consent.
                    </p>
                    <a href="/DigitalSignature">
                    <button className="btn btn-dark">Apply Now</button>
                    </a>
                   
                  </div>
                </div>

                {/*fourth container of about */}
                <div className="row mt-5">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="Ser_Cont" style={{ minHeight: "0px" }}>
                      <p className="text-white">
                        All-round website development services from design to
                        maintenance with web experts websites With Team Work.{" "}
                      </p>
                    </div>
                    <h2 style={{ color: "#fcba03" }}>
                      Responsive Website Design Packages
                    </h2>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12 ">
                        <div id="Star">
                          <h2>STARTER</h2>
                          <h3>
                            <i className="fa fa-inr"></i> 10,000/-
                          </h3>
                          <hr></hr>
                          <div className="cont_Star text-white">
                            <p>• Up to 5 Pages</p>
                            <p>• 2 design concepts</p>
                            <p>• Mobile responsive layout</p>
                            <p>• Image Slider</p>
                            <p>• Contact form</p>
                            <p>• Google map</p>
                            <p>• FREE Social Media integration</p>
                            <p>• FREE Hosting for one year *</p>
                          </div>
                          <hr></hr>
                          <h4>Turnaround time = 1 week</h4>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div id="BestBuy">
                          <h2>BEST- BUY</h2>
                          <h3>
                            <i className="fa fa-inr"></i> 20,000/-
                          </h3>
                          <hr></hr>
                          <div className="cont_BestBuy text-white">
                            <p>• Up to 10 Pages</p>
                            <p>• 2 design concepts</p>
                            <p>• Mobile responsive layout</p>
                            <p>• Image Slider</p>
                            <p>• Contact form</p>
                            <p>• Google map</p>
                            <p>• FREE Social Media integration</p>
                            <p>• FREE Hosting for one year *</p>
                            <p>• Payment Gateway Integrate</p>
                          </div>
                          <hr></hr>
                          <h4>Turnaround time = 2 week</h4>
                        </div>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="hover hover-4 text-white rounded">
                      <img src={Portal} alt="ssl_image" height="350" />
                      <div className="hover-overlay"></div>
                      <div className="hover-4-content">
                        <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                          <span
                            className="font-weight-light"
                            style={{ color: "#1fc410" }}
                          >
                            Website{" "}
                          </span>
                          and Portals{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="gap-top service-middle-banner-bottom-wrapp">
          <div class="container">
            <div class="row align-items-center service-middle-banner-bottom-block">
              <div class="col-md-6 ser-mid-banner-bottom-content-block">
                <div class="ser-ban-bot-title text-high">Research</div>
                <p></p>
                <p className="my_text">
                  We research upon every situation, understand your problems
                  properly, focus on the main objectives and lead you in the
                  right direction. We research upon every situation, understand
                  your problems properly, focus on the main objectives and lead
                  you in the right direction. Building strategies based on data
                  – We build strategies on data. No guess work. We check
                  business data. Audience analytics. Website and social media.
                  And with data-driven insights in place, a strategy can form.
                  Our digital strategies are long term plans to achieve your
                  business goals.
                </p>
                <p></p>
              </div>
              <div class="col-md-6 ser-mid-banner-bottom-image-block">
                <img src={Reaserch} className="img-fluid" alt="" />
              </div>
            </div>

            <div class="row align-items-center service-middle-banner-bottom-block">
              <div class="col-md-6 ser-mid-banner-bottom-image-block">
                <img src={business} className="img-fluid" alt="" />
              </div>
              <div class="col-md-6 ser-mid-banner-bottom-content-block">
                <div class="ser-ban-bot-title text-high">Business Analysis</div>
                <p></p>
                <p className="my_text">
                  We make it our business to know your business. No cookie
                  cutter templatized solutions – personalized campaigns. We aim
                  to keep our clients ahead of the curve. A team of doers &amp;
                  thinkers, designers &amp; planners, detail &amp; big picture
                  people. Delivery of quality solutions, on time &amp; within
                  budget. Pure &amp; simple results oriented – that’s what we
                  and our clients are here for! That’s the bottom line!!
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Service;
