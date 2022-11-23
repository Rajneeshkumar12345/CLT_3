import React, { useState } from "react";
import "./CareerPage.css";
import Career from "../images/Career.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function CareerPage() {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };
  return (
    <>
      <div className="CareerPage">
        <div className="container">
          <section>
            <div className="Careers py-3">
              <div className="row Career">
                <div className="col-md-12">
                  <section
                    className="d-flex justify-content-between p-2 text-white"
                    style={{ backgroundColor: "#f5ebee" }}
                  >
                    <div className="me-5 ms-5"></div>

                    <div>
                      <a
                        href="https://www.facebook.com/CodeLoverTech/"
                        target="_blank"
                        className=" me-4"
                      >
                        <FacebookOutlinedIcon fontSize="large" />
                      </a>
                      <a
                        href="https://twitter.com/infoRajInfotech"
                        target="_blank"
                        className=" me-4"
                      >
                        <TwitterIcon fontSize="large" />
                      </a>

                      <a
                        href="https://www.instagram.com/codelovertechnology/?hl=en"
                        target="_blank"
                        className=" me-4"
                      >
                        <InstagramIcon fontSize="large" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/codelover-technology-810724151/"
                        target="_blank"
                        className=" me-4"
                      >
                        <LinkedInIcon fontSize="large" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/codelover-technology-810724151/"
                        target="_blank"
                        className=" me-4"
                      >
                        <YouTubeIcon fontSize="large" />
                      </a>
                    </div>
                  </section>
                </div>
                <div className="col-md-6 col-sm-12 Heading_Career">
                  <h3>CAREERS AT NEXT-GENERATION</h3>
                  <h1 className="Work_heading">Work with us</h1>
                  <p className="Career_content">
                    We have now working latest technology @2022 for the current
                    Era and future realistic with React-Js, Mobile Apps,
                    Internet Of Things(IOT), Computer Vision, Artificial
                    Intelligence(AI) and Many more.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img src={Career} className="img-fluid" />
                </div>
              </div>
            </div>
          </section>

          <main id="main" style={{ marginLeft: "5rem" }}>
            {/* <header id="header">
          <h1 id="title">Lorem Ipsum Corp</h1>
          <p id="description">Please fill the career survey form</p>
        </header> */}

            <form id="survey-form" action="">
              {/* Form Header */}
              <h2 id="form-header" className="h2_Career">
                Career Survey Form
              </h2>

              <label id="name-label" for="name" className="Label_Common">
                Name:{" "}
                <input
                  id="name"
                  type="text"
                  className="Input_Career"
                  placeholder="Full name"
                  title="Enter your full name"
                  required
                />
              </label>

              <label id="email-label" for="email" className="Label_Common">
                Email:{" "}
                <input
                  id="email"
                  type="email"
                  className="Input_email"
                  placeholder="Email address"
                  title="Enter your email address"
                  required
                />
              </label>

              <label id="number-label" for="number" className="Label_Common">
                Phone:{" "}
                <input
                  id="number"
                  type="number"
                  className="Input_Age"
                  placeholder="Phone"
                  title="Please specify your age"
                  min="18"
                  max="100"
                />
              </label>

              <label
                id="dropdown-label"
                for="dropdown"
                className="Label_Common"
              >
                Job Title:
                <select name="job-title" id="dropdown">
                  <option disabled selected value>
                    Please select your job title
                  </option>
                  <option value="Help Desk Technician">
                    Front-End Developement
                  </option>
                  <option value="IT Support Manager">
                    Back-End Developement
                  </option>
                  <option>BDA</option>
                  <option>Others</option>
                </select>
              </label>

              {/* Radio buttons to select career level */}
              <fieldset id="career-fieldset">
                <legend id="career-legend">
                  Please specify your current career level
                </legend>

                <label
                  id="entry-level-label"
                  for="entry-level"
                  className="Label_Common"
                >
                  <input
                    type="radio"
                    name="career-level"
                    id="entry-level"
                    value="entry-level"
                    checked
                  />{" "}
                  Entry level
                </label>

                <label
                  id="mid-level-label"
                  for="mid-level"
                  className="Label_Common"
                >
                  <input
                    type="radio"
                    name="career-level"
                    id="mid-level"
                    value="mid-level"
                  />{" "}
                  Mid level
                </label>

                <label
                  id="senior-level-label"
                  for="senior-level"
                  className="Label_Common"
                >
                  <input
                    type="radio"
                    name="career-level"
                    id="senior-level"
                    value="senior-level"
                  />{" "}
                  Senior level
                </label>
              </fieldset>

              {/* Checkboxes to select skills */}
              <fieldset id="skills-field-set">
                <legend id="skills-legend">
                  Please select all the skills you have
                </legend>

                <label
                  id="it-support-checkbox-label"
                  for="it-support-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="it-support-checkbox"
                    value="it-support-checkbox"
                  />{" "}
                  Web Development
                </label>

                <label
                  id="svr-ntwk-adm-checkbox-label"
                  for="svr-ntwk-adm-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="svr-ntwk-adm-checkbox"
                    value="svr-ntwk-adm-checkbox"
                  />{" "}
                  Application Development
                </label>

                <label
                  id="app-dev-supp-checkbox-label"
                  for="app-dev-supp-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="app-dev-supp-checkbox"
                    value="app-dev-supp-checkbox"
                  />{" "}
                  Mobile App Development
                </label>

                <label
                  id="web-dev-checkbox-label"
                  for="web-dev-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="web-dev-checkbox"
                    value="web-dev-checkbox"
                  />{" "}
                  IT Support and Security
                </label>

                <label
                  id="cloud-tech-checkbox-label"
                  for="cloud-tech-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="cloud-tech-checkbox"
                    value="cloud-tech-checkbox"
                  />{" "}
                  Cloud Technologies
                </label>

                <label
                  id="it-sec-checkbox-label"
                  for="it-sec-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="it-sec-checkbox"
                    value="it-sec-checkbox"
                  />{" "}
                  Internet Of Things (IOT)
                </label>

                <label
                  id="it-mgmt-checkbox-label"
                  for="it-mgmt-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="it-mgmt-checkbox"
                    value="it-mgmt-checkbox"
                  />{" "}
                  Business Development Associate
                </label>

                <label
                  id="other-checkbox-label"
                  for="other-checkbox"
                  className="Label_Common"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    id="other-checkbox"
                    value="other-checkbox"
                  />{" "}
                  Other
                </label>
              </fieldset>

              {/* Textarea for comments */}

              <label
                id="textarea-comment-field-label"
                for="textarea-comment-field"
                className="Label_Common"
              >
                Comments:
                <textarea
                  name="textarea-comment-field"
                  id="textarea-comment-field"
                  cols="10"
                  rows="3"
                  placeholder="Please enter any other information or comments here..."
                ></textarea>
              </label>

              {/* Submit user input */}
              <div className="File_Uloading mt-5">
                <labe>Upload your resume:</labe>
                <input type="file" className="mt-2" onChange={handleChange} />
                {file && (
                  <div>
                    <span>{file.name}</span>
                    <img src={URL.createObjectURL(file)} />
                  </div>
                )}
              </div>
              <div className="btn text-center mt-5">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-dark btn-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default CareerPage;
