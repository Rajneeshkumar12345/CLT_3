import React, { useEffect } from 'react'
import company from "../images/Company_Profile.jpg"
import vision from "../images/Mission_Vision.jpg"
import mission from "../images/Our_Vision.jpg"
import { Link } from "react-router-dom";
function About() {
    useEffect(() => {
        document.title = "About page - CodeLover Technology Pvt Ltd"
    })
  return (
    <>
 <div className="body-content" style={{backgroundColor:"#b8d0d1", marginTop:"0rem"}}>
 {/* <div className="image">
          <img src="CodeLoverTech_Logo.png" width="250" height="80" className="mt-2" style={{marginLeft:"70px"}}></img>
        </div> */}
<div className="container">
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <h1 className="section-title text-center">CodeLover Technology Profile</h1>
            
            <img src={company} style={{width:"100%"}}/>

            <div className="panel-body mt-3">
                <p>
                    <b>CodeLover Technology</b> provide services in software applications, extensively used in different kind of business process.
                </p>
                <p>
                    Our professional helps in creating interactive Websites and Software Applications, Multimedia Presentations using latest technology.
                </p>
                <p>
                    We have done over many attractive web applications, software and have invested substantially in people,
                    processes, research and support to ensure that our customers satisfyed with Our commitment to quality and service.
                </p>
                <p>
                    <b>CodeLover Technology</b> always work with the customers’ best interests and
                    objectives in mind.
                </p>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel-body">
                <div style={{width: "100%", maxHeight: "215px",maxWidth: "768px",margin: "10px auto"}}>
                    <img src={vision} style={{width:"100%",maxHeight: "215px"}}/>
                </div>
                
                <p>
                    To be one of the most trusted and preferred IT companies by enabling success for our clients, employees and partners.
                </p>
                <h3>VALUES</h3>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <p>
                        We value <b>RELATIONSHIP</b> more than anything and we always strive to ensure that our dedication reflects in everything that we do.
                    </p>
                    <p>
                        We value <b>INTEGRITY</b> and we always follow honesty, and transparency in all our business transactions.
                    </p>
                    <p>
                        We value <b>RESPONSIBILITY</b> and we always try to induce excellence and innovation to surpass our clients’ expectations.
                    </p>
                    <p>
                        We value <b>COLLABORATION</b> and we always adopt our clients’ work as our own which helps us in working beyond the apparent requirements, and creating winning solutions.
                    </p>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <img src={mission} className="img-responsive" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel-body mt-3">
                <h3>ENSURING SUCCESS THROUGH WINNING SOLUTIONS</h3>
                <p>
                    CodeLover Technology is a global IT company with a proven track record of excellence in software-consulting, outsourcing and digital solutions. Having worked for more than a decade, we have gained unparalleled experience and developed comprehensive capabilities &amp; expertise across a wide variety of functions and industries.
                </p>
                <p>
                    We partner with companies to fulfill their ever evolving IT needs and support their business with our enabling solutions. Our team of professional constantly work to create personalized, end-to-end solutions to serve the dynamic requirements of our clients.
                </p>
                <p>
                    Whether it is one of those small programming assignments, or a heavyweight project, or a niche development solution, we are fully equipped to develop dynamic, integrated applications &amp; systems that enable your business to succeed to new heights.
                </p>
                <p>
                    No matter which part of the globe you do your business, we comprehend the global industry practices and business trends as we are already serving our clients coming from India and all parts of the world.
                </p>
            </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default About