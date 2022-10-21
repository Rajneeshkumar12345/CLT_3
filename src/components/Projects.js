import React,{useEffect} from "react";
import hrms from "../images/hrms.jpeg";

import ReactReadMoreReadLess from "react-read-more-read-less";
const Projects = () => {
  useEffect(() => {
    document.title = "Projects page - CodeLover Technology Pvt Ltd"
})
  return (
    <>
      <div className="projects" style={{ backgroundColor: "#04d9c7" }}>
      {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
        <div
          className=" contain_Projects"
          style={{ backgroundColor: "#8ca379"}}
        >
          <div className="py-3">
            <h1 className="text-center " style={{marginTop:"130px" }}>
              <span style={{ color: "#05f70d" }}>HRMS</span> Projects
            </h1>
            <div className="row">
              {/* First container of Technology */}

              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-5">
                <div className="hover hover-4 text-white rounded ms-3">
                  <img src={hrms} alt="" className="fluid" height="328" />
                  
                  {/* <div className="hover-overlay"></div> */}
                  {/* <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0"></h3>
                  </div> */}
                </div>
              </div>

              <div
                className="col-md-6 col-sm-12  mb-3 mb-lg-0   text-white Technology_content Last_content"
                style={{ marginTop: "80px" }}
              >
                {/* <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={<buttton className="btn btn-dark">Read more ▼</buttton>}
                  readLessText= {<buttton className="btn btn-dark">Read more ▲</buttton>}
                > */}
                <div className="contan me-3">
                Indian Railway has launched completely digitized online Human
                Resource Management System (HRMS). Human Resource Management
                System (HRMS) is a high thrust project for Indian Railways to
                leverage improved productivity & employee satisfaction. It is a
                move to improve efficiency and productivity of Railway system
                and a step towards realizing the vision of Hon’ble Prime
                Minister to transform India into a digitally empowered society
                and knowledge economy. HRMS is expected to create a big impact
                on the functioning of all the employees and will make them more
                tech savvy.
                <br></br>
                <br></br>
                This HRMS Application allows the employee to view their
                historical data since their date of joining in Railways
                including details like-
                {/* </ReactReadMoreReadLess> */}
                <ul>
                  <li>Bio-data,</li>
                  <li>Service Record</li>
                  <li>Increments,</li>
                  <li>Promotions,</li>
                  <li>Awards,</li>
                  <li>Transfers,</li>
                  <li>Postings,</li>
                  <li>Leave,</li>
                  <li>Pass, PTO</li>
                  <li>Training, and</li>
                  <li>Composition of Family</li>
                  <li>Nominations for retirement benefits.</li>
                </ul>
                </div>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
