import React,{useEffect} from "react";
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
import Portal from "../images/Portal.png"

import ReactReadMoreReadLess from "react-read-more-read-less";

function Service() {
  useEffect(() => {
    document.title = "Service page - CodeLover Technology Pvt Ltd"
})
  return (
    <>
      <div className="body-content" style={{ backgroundColor: "#b8d0d1" }}>
      {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
        <div className="container" style={{marginTop:"0rem"}}>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 ">
              <h1 className="section-title text-center" style={{marginTop:"7rem"}}>
                CODELOVER <span style={{color:"#d60909"}}>TECHNOLOGY</span> SERVICES
              </h1>
              <p className="service_justify">
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
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <ul
                    className="nav nav-tabs tabs-left"
                    role="tablist"
                    style={{ backgroundColor: "#c7f5c1", borderRadius:"10px" }}
                    class="ms-1"
                  >
                    SOFTWARE DEVELOPMENT
                    <li className="ms-3">Consultany Services</li>
                    <li className="ms-3">Technology Services</li>
                    <li className="ms-3">Outsourcing Services</li>
                    <li className="ms-3">IT Support Services</li>
                    <li className="ms-3">Website and Portals</li>
                    <li className="ms-3">Hosting</li>
                    <li className="ms-3">Web Designing</li>
                    <li className="ms-3">Mobile Application</li>
                    {/* <li role="presentation" className="active py-3 text-center">
                      <a
                        href="#custom_software_development"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        CUSTOM SOFTWARE DEVELOPMENT
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#consultancy_services"
                        aria-controls="profile"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                        
                      >
                        CONSULTANCY SERVICES
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#technology_services"
                        aria-controls="messages"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        TECHNOLOGY SERVICES
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#outsourcing_services"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        OUTSOURCING SERVICES
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#it_support_services"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        IT SUPPORT SERVICES
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#websites_and_portals"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        WEBSITES AND PORTALS
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#web_hosting"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        WEB HOSTING
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#web_designing"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        WEB DESIGNING
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#mobile_application"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                        style={{ textDecoration: "none" }}
                      >
                        MOBILE APPLICATION
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="custom_software_development"
                    >
                      <div className="row">
                        <div className="Service_content" id="customSoftDevl">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <h2 className="feature_title">
                              Custom Software Development
                            </h2>
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <img
                                src={custom}
                                className="img-responsive"
                                alt="software-development"
                                width="400"
                                height="350"
                              />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="Ser_Cont">
                                <p>
                                  CodeLover Technology is a global IT company
                                  with a proven track record of excellence in
                                  software-consulting, outsourcing and digital
                                  solutions. Having worked for more than a
                                  decade, we have gained unparalleled experience
                                  and developed comprehensive capabilities &amp;
                                  expertise across a wide variety of functions
                                  and industries.
                                </p>
                                <p>
                                  We partner with companies to fulfill their
                                  ever evolving IT needs and support their
                                  business with our enabling solutions.
                                </p>
                                <p>
                                  Our team of professional constantly work to
                                  create personalized, end-to-end solutions to
                                  serve the dynamic requirements of our clients.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ borderRadius: "15px" }}>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1 className="section-title text-center text-uppercase">
                {" "}
                <span style={{ color: "#e30707", font: "bold" }}>
                  Hosting
                </span>{" "}
                Name
              </h1>
            </div>
          </div>
          <div className="row">
            {/* First container of Technology */}
            <div className="hosting"></div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h5 className="text-center mt-5">
                {" "}
                <span style={{ color: "#077ce3" }}>WEB HOSTING</span>
              </h5>
            </div>
            <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
              <div className="hover hover-4 text-white rounded">
                <img src={hosting} alt="" className="fluid" />
              </div>
            </div>

            <div className="col-md-6 col-sm-12  mb-3 mb-lg-0 text-white Technology_content Last_content">
              <div className="Ser_Cont" id="WebHosting">
                <p className="text-dark mt-3">
                  We create corporate web portals and intranets to help
                  established enterprises benefit from collaboration and
                  document management.
                </p>
                <h2 style={{ color: "#d40688" }}>Hosting Plan</h2>
                <div className="row p-2">
                  <table className="table table-bordered table-condensed table-hover">
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
                      <tr>
                        <td>
                          {" "}
                          <h4>
                            <i className="fa fa-inr"></i> 600/Year
                          </h4>
                        </td>
                        <td>
                          <h4>
                            <i className="fa fa-inr"></i> 2000/Year
                          </h4>
                        </td>
                        <td>
                          {" "}
                          <h4>
                            <i className="fa fa-inr"></i> 3500/Year
                          </h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>1 GB Space</p>
                        </td>
                        <td>
                          <p>10 GB Space</p>
                        </td>
                        <td>
                          <p>Unlimited Space</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>1 Emails</p>
                        </td>
                        <td>
                          <p>10 Emails</p>
                        </td>
                        <td>
                          <p>Unlimited Emails</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type="button" className="btn btn-success">
                            Buy Plan
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Buy Plan
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Buy Plan
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="AdmiCpan text-center py-2 bg-dark">
                  With admin cpanel
                </p>
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
                        <button className="btn btn-dark">Read More ▲</button>
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
                        <button className="btn btn-dark">Read More ▲</button>
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
                    A Digital Signature Certificate is a secure digital key that
                    is issued by the certifying authorities for the purpose of
                    validating and certifying the identity of the person holding
                    this certificate. Digital Signatures make use of the public
                    key encryptions to create the signatures.
                  </div>
                </div>

                {/*fourth container of about */}
                <div className="row mt-5">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="Ser_Cont" style={{minHeight:"0px"}}>
                        <p className="text-white">All-round website development services from design to maintenance with web experts websites With Team Work.  </p>
                    </div>
                    <h2 style={{color:"#fcba03"}}>Responsive Website Design Packages</h2>
                    <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 ">
                        <div id="Star">
                            <h2>STARTER</h2>
                            <h3><i className="fa fa-inr"></i> 10,000/-</h3>
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
                            <h3><i className="fa fa-inr"></i> 20,000/-</h3>
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
                            Website {" "}
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
      </div>
    </>
  );
}

export default Service;
