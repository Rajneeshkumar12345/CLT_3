import React,{useEffect} from "react";
import "./Technology.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Android from "../images/Android.png"
import Window from "../images/Window.png"
import HTML from "../images/HTML.png"
import ASP_NET from "../images/ASP_NET.png"

const Technology = () => {
  useEffect(() => {
    document.title = "Technology page - CodeLover Technology Pvt Ltd"
})
  return (
    <>
  
      {/* We believe */}
      <div className="" style={{ backgroundColor: "#06769e", marginTop:"0rem" }}>
      {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
        <div className="container container_item py-5">
          <div className="content_item text-white">
            <h3 className="text-center">WE BELIEVE</h3>
            <p className="card-text ">
              We believe in providing integrated solutions, to ensure no-gap
              between our clients' ranging needs, ever creeping technology
              advancements and the competency of solutions we offer.<br></br>
              <br></br>
              We are fully equipped and sufficiently resourced for using
              technologies from different streams and provide you a fully-loaded
              solution with the best technological support.<br></br>
              <br></br>
              Our stringent product development processes and product reference
              system are highly competent to provide solutions of any volume,
              resolve any level of complexities and meet any rational timeline
              to set off your tight working conditions. Our technological
              expertise lets us conjoin different development parameters and
              bring all resourceful entities like (languages, platforms, tools
              and business modules) together in the most advanced arrangement of
              production thereby processing immaculate solutions for your unique
              business needs:-
            </p>
          </div>
          <div className="microsoft text-white">
            <h4>MICROSOFT </h4>
            <ul>
                <li>GUI : ASP.NET, Win Forms, WPF, Silverlight, Ajax</li>
                <li>Reporting : SQL Server Reporting Services, Crystal Reports</li>
                <li>Rich UI : Telerik, Infragistics, Dundas Tools</li>
                <li>Testing : NUnit, Visual Studio Load Test</li>
                <li>Middleware : .NET Framework (including WF & CardSpace)</li>
                <li>Framework : Microsoft Software Factories & Application Blocks, DotNetNuke</li>
                <li>ommunication : Web Services, SOAP, XML, WCF</li>
                <li>Database : MS SQL Server (including SSRS, SSIS & SSAS and Service Broker),MySQL, MS Access,SQL Yog.</li>
            </ul>
          </div>
          <div className="rich-media text-white">
            <h4>RICH-MEDIA</h4>
            <ul>
                <li>RIA Technologies : Ajax, Adobe Flex, Adobe AIR, Microsoft Silverlight</li>
                <li>Web : XHTML, DHTML, JavaScript, Java applets, Flash MX ActionScript</li>
            </ul>
          </div>
          <div className="database text-white">
            <h4>DATABASE</h4>
            <ul>
            <li>MS SQL Server</li>
            <li>Microsoft Access</li>
            <li>DB2, UDB</li>
            <li>mySQL</li>
            </ul>
          </div>
        </div>
      </div>
      

      {/* Mobile Technology container */}

      <div
        className="Technology"
        style={{ marginTop: "0rem", backgroundColor: "#06769e" }}
      >
        <div className="container ">
          <div className="py-3">
            <h1 className="text-center my-3">
              <span style={{ color: "#05f70d" }}>Mobile</span> Technologies
            </h1>
            <div className="row">
              {/* First container of Technology */}
           
            <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                <div className="hover hover-4 text-white rounded ">
                  <img
                    src={Android}
                    alt="android_image"
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      <span
                        className="font-weight-light"
                        style={{ color: "#c41073" }}
                      >
                        Android{" "}
                      </span>
                      Application Development{" "}
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      CodeLover Technology Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
           

        
            <div
                className="col-md-6 col-sm-12  mb-3 mb-lg-0 text-white Technology_content Last_content"
                style={{ marginTop: "50px" }}
              >
                Android is the most dynamic operating system being in demand in
                today’s scenario. The Android Application is considered highly
                useful with its user-friendly features and serves for the most
                varied purposes. This is the most on demand software to allure
                the users greatly which is being available today in every range
                of phone and serves for the great purposes right from chatting,
                easy browsing & downloading, gaming and more. And so the Android
                Apps need to be updated and traversed for normal flow of your
                smart phones and for that purpose, the Android Apps developers
                will bring the best performances for you. We at CodeLover
                Technology bring one of the best ways to cater your
                requirements; once you hire our dedicated services.
              </div>
            
          

          
            </div>

            {/* Second container of about */}
            <div className="row mt-5">
              <div
                className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                style={{ marginTop: "10px" }}
              >
                Infoicon Technologies is one of the early followers of the
                Windows Mobile platform for mobile application development and
                has helped enterprises to leverage this platform for addressing
                numerous business challenges. Our most skilled Windows Apps
                developers have also developed and published a host of consumer
                centric Windows Phone applications, as the platform shifted to
                the more advanced Windows Phone version. We have a team of
                trained and skilled developers for Windows Phone platform who
                can provide consulting and development services as part of the
                Windows mobile application development. Our Windows Application
                Development Solutions will include: Custom Windows Mobile
                Development. Windows Mobile Consulting Services Application
                Development to Wireless Device Transfers Games & Standalone
                Mobile Software Development Data Synchronization Services
              </div>
              {/* About Item */}
              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                <div className="hover hover-4 text-white rounded">
                  <img
                    src={Window}
                    alt="window_image"
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      <span
                        className="font-weight-light"
                        style={{ color: "#1fc410" }}
                      >
                        Window{" "}
                      </span>
                      Application Development{" "}
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      CodeLover Technology Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd container */}

        <div className="container ">
          <div className="py-3">
            <h1 className="text-center my-3">
              <span style={{ color: "#05f70d" }}>Internet</span> Technologies
            </h1>
            <div className="row">
              {/* Third container of Technology */}
              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                <div className="hover hover-4 text-white rounded ">
                  <img
                    src={HTML}
                    alt="html_image"
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      <span
                        className="font-weight-light"
                        style={{ color: "#c41073" }}
                      >
                        HTML5{" "}
                      </span>
                      Development{" "}
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      CodeLover Technology Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Technology_content Last_content"
                style={{ marginTop: "40px" }}
              >
                HTML5 is the recent and highly demanded web development platform
                that takes the experience of creating web pages to a different
                and extreme level. Most of all through its captivating features
                it even have enhanced the viewing experience of the site.
                <ul>
                  <li>Improved context menu</li>
                  <li>Advanced client server communication channel</li>
                  <li>Embedded video and audio tags</li>
                  <li>Direct mode graphics canvas</li>
                  <li>Great semantics</li>
                  <li>Offline web applications</li>
                  <li>Scoped styling</li>
                  <li>Sandboxes iframes</li>
                </ul>
              </div>
            </div>

            {/*fourth container of about */}
            <div className="row mt-5">
              <div
                className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white Last_content"
                style={{ marginTop: "30px" }}
              >
                <ReactReadMoreReadLess
                  charLimit={800}
                  readMoreText= "Read More ▼"
                  readLessText= "Read Less ▲"
                >
                  In today’s world of collaboration and integrated environment,
                  the presence of .Net Technology is one of the features
                  intended to connect with the rest of the world. Through the
                  flexibility of interacting interfaces like Desktops, Phones,
                  TVs, Browsers, Internet etc, .NET is a platform to allow a
                  developer for making intelligent applications with
                  interoperability across platforms and that too in a limited
                  timeframe. .Net is a top notch domain which was earlier
                  designed for Internet Service Providers (ISP), but now has
                  been extended; so that everybody can create use of a .net
                  domain. It uses the Internet Domain Naming System (DNS) and it
                  is a contraction of the word 'Network'. The main part of the
                  .Net technology & structure is the ASP.net set of
                  technologies. These web development technologies are used in
                  the making of Websites and net services working on the .NET
                  infrastructure. ASP.NET was built by Microsoft from one of
                  their big technologies; and web programmers can make use of
                  any encoding language they want to write from Perl to C Sharp
                  (C#) and of course VB.NET. The advantages of the ASP.NET
                  technology are that it creates websites, web applications and
                  web services in a simple way with the application of fewer
                  codes. As well, the applications compiled in ASP.NET run
                  quicker and with fewer errors. The advantages of the ASP.NET
                  technology are that it creates websites, web applications and
                  web services in a simple way with the application of fewer
                  codes. As well, the applications compiled in ASP.NET run
                  quicker and with fewer errors. (1) Dot Net is assimilated with
                  a large library that gives higher scope for developers (2) It
                  is made compatible with other programming languages (3) Large
                  database of library offers tools for user interface, data
                  access, data connectivity and network communications (4) Our
                  developers assist the client with Dot Net features of Common
                  Language Runtime Engine (CLR). All programs executed under the
                  CLR guarantees certain behavioral properties in the areas of
                  memory management and security. (5) This is the only
                  programming tool that features Interoperability, Language
                  Independence, Base Class Library and Common Language Runtime
                  Engine under one single roof.
                </ReactReadMoreReadLess>
                .
              </div>
              {/* About Item */}
              <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                <div className="hover hover-4 text-white rounded">
                  <img
                    src={ASP_NET}
                    alt="asp_image"
                  />
                  <div className="hover-overlay"></div>
                  <div className="hover-4-content">
                    <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                      <span
                        className="font-weight-light"
                        style={{ color: "#1fc410" }}
                      >
                        ASP. NET{" "}
                      </span>
                      Development{" "}
                    </h3>
                    <p className="hover-4-description text-uppercase mb-0 small">
                      CodeLover Technology Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
