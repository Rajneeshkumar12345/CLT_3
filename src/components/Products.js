import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Product1 from "../images/Product1.png";
import Product2 from "../images/Product2.png";
import Product3 from "../images/Product3.png";
import Product4 from "../images/Product4.png";
import Product5 from "../images/Product5.png";
import Product6 from "../images/Product6.png";
import Product7 from "../images/Product7.png";
import Product8 from "../images/Product8.png";

const Products = () => {
  useEffect(() => {
    document.title = "Product page - CodeLover Technology Pvt Ltd"
})
  return (
    <>
      <div className="product" style={{ marginTop: "0rem" }}>
      {/* <div className="image py-2" style={{backgroundColor:"#06769e"}}>
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
     
        <h2
          className="text-center py-4"
          style={{
            marginTop: "0rem",
            font: "bold",
            fontSize: "40px",
            fontWeight: "50px",
            backgroundColor: "#d609b1",
          }}
        >
          OUR <span style={{ color: "#091ad6" }}>CMS</span> PRODUCT
        </h2>
        
        <div className="" style={{ marginTop: "-1rem" }}>
          <div className="row">
            <div className="col">
              <div className="Card" style={{ backgroundColor: "#049eb3" }}>
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 text-left shadow">
                      <img
                        className="image img-fluid p-4"
                        src={Product1}
                        alt="sans"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <h2>Centre Management System(CMS) Software</h2>
                      <div className="card-text text-white Product_List">
                        Centre Management System(CMS) is Online Portal for
                        Managing All Activity related to Study Center
                        Management. Most intuitive, user-friendly learning
                        management system that augments teaching and learning,
                        steers excellence, and provides continuous quality
                        improvement for better insights.The success of
                        educational Centres largely depends on how they manage
                        relationships and communicate with Management Team
                        including Activity on students, Student Admissions,
                        Receipts, Session, After Login Details and Many More.
                        Managing Study Centre, Students, Party as well as
                        University. On one hand, it takes robust data management
                        capabilities to organize information and make it easily
                        accessible. On the other hand, it also requires
                        continuous and non-stop running of operations in an
                        optimized and smooth way.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card">
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text Product_List bold">
                        <h4>Key Features:-</h4>
                        <ul className="font-weight-bold">
                          <li>Application Management</li>
                          <li>Fee Management</li>
                          <li>Academics</li>
                          <li>Course & Lecture Scheduler</li>
                          <li>Calendar Management</li>
                          <li>Attendance Management</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 text-right ">
                      <img
                        className="image img-fluid p-4"
                        src={Product2}
                        alt="sans"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card" style={{ backgroundColor: "#8e918f" }}>
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 text-left shadow">
                      <img
                        className="image img-fluid p-4"
                        src={Product3}
                        alt="sans"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text text-white Product_List">
                        <h4>Student Section</h4>
                        <ul>
                          <li>New Admission</li>
                          <li>View Student Information</li>
                          <li>Edit/Update/Delete Student Data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card">
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5">
                      <div className="card-text Product_List">
                        <h4>Admin Section</h4>
                        <ul>
                          <li>View Student Section</li>
                          <li>Admission Payment</li>
                          <li>View Payment</li>
                          <li>University Payment</li>
                          <li>University Pay Details</li>
                          <li>Send SMS</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 text-right ">
                      <img
                        className="image img-fluid p-4"
                        src={Product4}
                        alt="sans"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}

        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card" style={{ backgroundColor: "#049eb3" }}>
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <img
                        className="img-fluid p-5 ms-5"
                        src={Product8}
                        alt="sans"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text text-white Product_List">
                        <p>
                          Centre Management System(CMS) is a cloud-based,
                          multi-capability education Centre management software
                          primarily developed for Institute/Centre and
                          universities. It helps users in managing all aspects
                          of their organization, from admission, Session,
                          Receipt and further fee Related infomation to the
                          scheduling of courses, management of Student Fee
                          Schedules. Centre Management System(CMS) is also
                          equipped with a Portal for students as well as Staff.
                          Loaded with multiple features, the CMS software helps
                          educational establishments simplify administration.
                        </p>
                        <h3>Application Management </h3>
                        <p>
                          Includes criteria-based applicant ranking, generation
                          of student ID after fee payment and ability to
                          restrict applicants with outstanding fee or any other
                          conditional requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}

        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card">
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text Product_List">
                        <h4>Masters for All Related Key Features </h4>
                        <ul>
                          <li>Master for Common Used Dynamic Value</li>
                          <li>Branch</li>
                          <li>Party</li>
                          <li>University</li>
                          <li>Course</li>
                          <li>Session</li>
                          <li>Semeter and Year</li>
                          <li>Exam Center</li>
                          <li>Role</li>
                          <li>User Managemnet</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 text-right ">
                      <img
                        className="img-fluid p-4"
                        src={Product6}
                        alt="sans"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 7 */}

        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card" style={{ backgroundColor: "#8e918f" }}>
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 shadow">
                      <img
                        className="image img-fluid p-4"
                        src={Product7}
                        alt="sans"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text text-white  Product_List">
                        <h4>
                          As Per Your Need ,Personalized Portal For Student,
                          Teacher and Admin Team
                        </h4>
                        <p>
                          Students, parents and teachers of the institution get
                          personalized credentials to access a portal from where
                          they could access critical information.
                        </p>
                        <h4>Course, Program & Lecturer Scheduler</h4>
                        <p>
                          Defines details of the course such as course type,
                          credit points, priority hours. Captures details of
                          program type and curricula along with details of
                          lecturers, weekly availability, workload logs and
                          courses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="Card">
                <div className="">
                  <div className="row shadow">
                    <div className="col-md-6 col-sm-6 col-xs-12 p-5 ">
                      <div className="card-text Product_List">
                        <h4>Student Acquisition</h4>
                        <p>
                          An online student admission management system through
                          which you could accept applications and track their
                          lifecycle. Define multiple decision-making parameters
                          to handle approvals and customize them to suit your
                          requirements. CentraHub EDU would automatically
                          integrate the application forms filled at your
                          institution’s website and save them on a centralized
                          database. <br></br>The application would help you
                          streamline student admission process management by
                          automating all tasks, covering vital stages of student
                          acquisition, namely, applications, approvals and
                          admissions.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 text-right ">
                      <img
                        className="img-fluid p-4"
                        src={Product5}
                        alt="sans"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="btn py-3">
            <Link to="/Contact"> <button type="button" className="btn btn-dark btn-lg">Request For Demo</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
