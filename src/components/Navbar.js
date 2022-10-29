import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Main from "../images/Main.png";
// import Main2 from "../images/Main2.png";
import logo from "../images/CodeLoverTech_Logo.png";

const Navbar = () => {
  const[home, setHome] = useState(false)

  const homeChange = () => {
      setHome("/")
      
  }
  return (
    <>

      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="image py-2 ">
          <a href='/'>
          <img
            src={logo}
            alt="logo"
            width="250"
            height="80"
            className="OMG"
            style={{ marginLeft: "70px" }}
          ></img>
          </a>
        
        </div>
        {/* <div className="socialMedia text-white">
          <h6>Hello Social media</h6>
        </div> */}
        <div className="menu ">
          <div>
            <div>
              <nav className="navbar navbar-expand-lg main_nav">
                <div className="container-fluid">
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
                          onClick={homeChange}
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
                            <Link to="/Service" className="dropdown-item">
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
                        >
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>






      {/* <header className="showcase">
        <div className="container showcase-inner">
            <h1>Binge</h1>
            <p>Match your Jacket class with luxury and comfort.</p>
            <a href="http://Youtube.com/c/ZaidIrfanKhan" target="_blank" className="btnn">Buy</a>
        </div>
        <div className="contact-links">
            <a href="https://www.instagram.com/zaidirfankhan/?hl=en" target="_blank" 
               className="btn contact-details"><i className="fab fa-instagram"></i>
               </a>
            <a
               href="https://twitter.com/ZaidIrfanKhan"
               target="_blank"
               className="btn contact-details"><i className="fab fa-twitter"></i>
              </a>
            <a href="https://codepen.io/zaidik" target="_blank" className="btn contact-details"><i className="fab fa-codepen"></i></a>
            <a href="https://github.com/ZaidKhan144" target="_blank" className="btn contact-details"> <i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/zaid-irfan-khan-9a4b964b/" target="_blank" className="btn contact-details"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:zaidirfan.945@gmail.com" className="btn contact-details"><i className="far fa-envelope"></i></a>
          </div>
    </header> */}
    </>
  );
};

export default Navbar;
