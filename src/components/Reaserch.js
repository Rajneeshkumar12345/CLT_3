import React, { useEffect } from "react";
import "./Research.css";
import Reaserch1 from "../images/Reaserch.png";
import ML1 from "../images/ML1.png";
import ML2 from "../images/ML2.png";
import ML3 from "../images/ML3.png";
import ML4 from "../images/ML4.png";
import ML5 from "../images/ML5.png";
import ML6 from "../images/ML6.png";

const Reaserch = () => {
  useEffect(() => {
    document.title = "Reaserch page - CodeLover Technology Pvt Ltd";
  });
  return (
    <>
      <div className="wrapper">
        <div className="fixed-bg bg-1">
          <h1>Artificial Intelligence ( AI )</h1>
        </div>

        <div className="scroll-bg">
          <h3>
            What if we leave this 20% to artificial intelligence? Sounds
            unlikely today as most businesses continue to rely on in-house
            content writers or agencies who struggle to find new content ideas.
            All this is about to change in next 5-10 years as newer technologies
            evolve which will potentially disrupt the way content writing
            business functions today.
          </h3>
        </div>

        <div className="fixed-bg bg-2">
          <h1>Internet Of Things ( IOT ) </h1>
        </div>

        <div className="scroll-bg">
          <h3>
            Over the past few years, IoT has become one of the most important
            technologies of the 21st century. Now that we can connect everyday
            objects—kitchen appliances, cars, thermostats, baby monitors—to the
            internet via embedded devices, seamless communication is possible
            between people, processes, and things.
          </h3>
        </div>

        <div className="fixed-bg bg-3">
          <h1>Web Designing</h1>
        </div>
        <div className="scroll-bg">
          <h3>
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development rather than software development. Web design
            used to be focused on designing websites for desktop browsers;
            however, since the mid-2010s, design for mobile and tablet browsers
            has become ever-increasingly important.
          </h3>
        </div>
      </div>

      <div className="wrapper">
        <div className="fixed-bg bg-4">
          <h1>Software Development</h1>
        </div>

        <div className="scroll-bg">
          <h3>
            CodeLover Technology is a global IT company with a proven track
            record of excellence in software-consulting, outsourcing and digital
            solutions. Having worked for more than a decade, we have gained
            unparalleled experience and developed comprehensive capabilities &
            expertise across a wide variety of functions and industries.
          </h3>
          <p></p>
          <h3>
            We partner with companies to fulfill their ever evolving IT needs
            and support their business with our enabling solutions.
          </h3>
          <p></p>
          <h3>
            Our team of professional constantly work to create personalized,
            end-to-end solutions to serve the dynamic requirements of our
            clients.
          </h3>
        </div>

        <div className="fixed-bg bg-5">
          <h1> SSL Certificate</h1>
        </div>

        <div className="scroll-bg">
          <h3>
            An SSL certificate is a digital certificate that authenticates a
            website's identity and enables an encrypted connection. SSL stands
            for Secure Sockets Layer, a security protocol that creates an
            encrypted link between a web server and a web browser.
          </h3>
        </div>

        <div className="fixed-bg bg-6">
          <h1>Consulting and Outsourcing</h1>
        </div>
        <div className="scroll-bg">
          <h3>
            With more than nine years of experience in meeting human resource
            requirements, our efforts have proved highly resourceful for
            different organizational needs. By employing the most meticulous
            methods of short-listing candidates, segregating precise framework
            of skills, orientation and experience; we strive to bring the best
            options for different IT staffing needs. We thoroughly analyze the
            employment requirements, contemplate departmental framework and
            relate it with the job description.
          </h3>
        </div>
      </div>




      <div class="container-fluid mb-5">
        <div class="text-center  mt-5">
          <h1 className="ML_Heading">ML.NET</h1>
          <h5>An open source and cross-platform machine learning framework</h5>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services settings">
                <div class="icon">
                  {" "}
                  <img src={ML1} alt="ml_sticker" />
                </div>
                <h4>Sales Forcasting</h4>
                <h6 className="Ml_text">Forecast future sales for products using a regression algorithm.</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services speedup">
                <div class="icon">
                  {" "}
                  <img src={ML2} alt="ml_sticker"/>{" "}
                </div>
                <h4>Fraud Detection</h4>
                <h6  className="Ml_text">Detect fraudulent credit card transaction using a binary classification algorithm.</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services privacy">
                <div class="icon">
                  {" "}
                  <img src={ML3} alt="ml_sticker" />{" "}
                </div>
                <h4>Price Prediction</h4>
                <h6  className="Ml_text">Predict taxi fares based on parameters such as distance traveled using a regression algorithm</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="our-services backups">
                <div class="icon">
                  {" "}
                  <img src={ML4} alt="ml_sticker" />{" "}
                </div>
                <h4>Product Recommendation</h4>
                <h6  className="Ml_text">Recommend products based on purchase history using a matrix factorization algorithm.</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services ssl">
                <div class="icon">
                  {" "}
                  <img src={ML5} alt="ml_sticker" />{" "}
                </div>
                <h4>Sentimental Analysis</h4>
                <h6  className="Ml_text">Analyze the sentiment of customer reviews using a binary classification algorithm.</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="our-services database">
                <div class="icon">
                  {" "}
                  <img src={ML6} alt="ml_sticker" />{" "}
                </div>
                <h4>Customer Segmentation</h4>
                <h6 className="Ml_text">Identify groups of customers with similar profiles using a clustering algorithm.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="gap-top service-middle-banner-bottom-wrapp">
        <div className="container">
          <div class="row align-items-center service-middle-banner-bottom-block">
            <div class="col-md-6 ser-mid-banner-bottom-content-block">
              <div class="ser-ban-bot-title text-high">Research</div>
              <p></p>
              <p className="my_text">
                We research upon every situation, understand your problems
                properly, focus on the main objectives and lead you in the right
                direction. We research upon every situation, understand your
                problems properly, focus on the main objectives and lead you in
                the right direction. Building strategies based on data – We
                build strategies on data. No guess work. We check business data.
                Audience analytics. Website and social media. And with
                data-driven insights in place, a strategy can form. Our digital
                strategies are long term plans to achieve your business goals.
              </p>
              <p></p>
            </div>
            <div class="col-md-6 ser-mid-banner-bottom-image-block">
              <img src={Reaserch1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reaserch;
