import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Main from "../images/Main.png";
// import Main2 from "../images/Main2.png";

const Navbar = () => {

  return (
    <>
     
     {/* <div className="con">
    

   

  
  </div>
  <div className="landing_page">
    <div className="menu">
      <label htmlFor="menuBtn">
        <i className="fas fa-bars"></i>
      </label>
    </div>
    <div className="card-image">
          <img src={Main2} className="card-img img-fluid" alt="..." />
          <div className="card-img-overlay">
            <div className="Iam">
              <b>
                <div className="innerIam">
                  Design
                  <br />
                  Development
                  <br />
                  Marketing
                  <br />
                  Infrastructure ans AI
                </div>
              </b>
            </div>
          </div>
        </div>
  </div>
</div> */}


<div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="image py-2" >
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="" style={{marginLeft:"70px"}}></img>
        </div>
        <div className="menu">
<div>
  <div>
  <nav className="navbar navbar-expand-lg main_nav">
        <div className="container-fluid">
          {/* <Link className="navbar-brand">
            <img src="CodeLoverTech_Logo.png" width="200" height="50"></img>
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link Navbar_heading dropdown-toggle active"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICE
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link to="/Service" className="dropdown-item">
                      CLT SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service"className="dropdown-item">
                      HOSTING
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service" className="dropdown-item">
                      DIGITAL SIGNATURE
                    </Link>
                  </li>
                  <li>
                    <Link to="/Service" className="dropdown-item">
                      SSL SIGNATURE
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider"></hr>{" "}
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Other Services
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/Technology"
                >
                  TECHNOLOGY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/Projects"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/Reaserch"
                >
                  REASERCH
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/Product"
                >
                  PRODUCT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Navbar_heading nav-link active"
                  aria-current="page"
                  to="/Contact"
                  // style={{
                  //   backgroundColor: "#f505d1",
                  //   borderRadius: "15px 50px",
                  // }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav> 
  </div>
</div>


        </div>
    </div>

    </>
  );
};

export default Navbar;
