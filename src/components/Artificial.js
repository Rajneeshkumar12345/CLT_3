import React from "react";
import "./Artificial.css";
import Artificial1 from "../images/Artificial.png";
import Backup from "../images/Backup.png";
import Signature from "../images/Signature.png";
import SSL from "../images/SSL.png";
import WebD from "../images/WebD.png";

function Artificial() {
  return (
    <>
    <div className="Artificial">
    <section class="banner-sm-wrapp position-relative xs-banner relative-banner">
        <div class="banner-sm-content-block">
          <div class="container">
            <div class="row">
              <div class="col-md-11 mx-auto">
                <div class="row align-items-center">
                  <div class="col-md-7 relative-banner-title-block">
                    <h1 className="web">
                      <span
                        style={{
                          color: "rgba(239, 44, 144, 0.91)",
                          fontWeight: "700",
                        }}
                      >
                        Artificial
                      </span>{" "}
                      <br></br> Intelligence
                    </h1>
                  </div>
                  <div class="col-md-5 relative-banner-button-block">
                    <a
                      href="/Contact"
                      class="CodeLover Technology-button blue-bg text-white"
                    >
                      <button className="btn btn-success py-2">
                        {" "}
                        Request A Quote
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gap-top service-detail-one-wrapp">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 service-detail-one-content-wrapp">
              <div class="title-48 blue-text">
                Artificial Intelligence with mix of Machine Learning and Deep
                Learning for your Business
              </div>
              <div class="bluenew-text text-bold mb-5">
                We pride ourselves in honing your digital strategy for business
                outcomes that drive real results
              </div>
              <p className="Web_content">
                Over the last few years, businesses have been disrupted in many
                ways, thanks to machine intelligent systems. We are living in a
                cognitive era where systems can see, listen, respond, and learn
                from every interaction we make, and redefine the existing
                benchmarks in the digital space with the next wave of digital
                transformation solutions.
              </p>
              <p className="Web_content">
                The adoption of Artificial Intelligence (AI) and Machine
                Learning (ML) in business is increasing due to the value proven
                on its applications in different areas of the business. AI and
                ML will be playing major roles and will be increasingly used to
                personalize products and services. You can unlock endless
                possibilities with the help of data-driven personalization and
                immersive experience. Today, many organizations bank on AI and
                ML in order to effectively utilize data to understand and
                predict patterns in customer behavior and market trends. Machine
                Learning and Artificial Intelligence has transcended business
                operations and made it possible for businesses to operate
                flawlessly without any human intervention.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 service-detail-one-image-block">
              <img src={Artificial1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section class="gap-top">
        <div class="container mt-5">
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                AI, Machine Learning, and Deep Learning in today’s world
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                As we move ahead with the times it is also important for us to
                upgrade. Bringing significant changes with the updated
                technology and trends is a must. We use the perfect research,
                modules to stay updated so that helps us stay on top our game.
                CodeLover Technology keeps an eye on the emerging trends and
                developments and upgradations in the industry and other aspects
                according to the changing consumer and market behaviour. Our
                talented team of website developers constantly explore the areas
                of improvement and audit analysis to serve the brand better.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Experts at AI, Machine Learning, and Deep Learning – CLT
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Looking to amplify your business by incorporating
                state-of-the-art technology? We, at CodeLover Technology, are here to scale up
                your business with custom-designed Machine Learning solutions
                for your company. CodeLover Technology’ and AI, ML & Deep Learning services
                aid businesses build custom solutions running on advanced
                machine learning algorithms. We provide companies solutions to
                integrate these algorithms with image & video analytics, as well
                as with other emerging technologies such as augmented reality &
                virtual reality to ensure customer satisfaction and gain a
                competitive advantage in the marketplace.
              </p>
              <p></p>
            </div>
          </div>
     
        </div>
      </section>

      <section className="client pt-3 pb-5 mt-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h3 className="display-6 fw-bold text-white">Testimonials</h3>
                <hr
                  className="bg-white mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "250px", height: "7px" }}
                />
                <p className="p-text text-white">What they have to say about us</p>
              </div>
            </div>
            <div className="row align-items-md-center text-white">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* Wrapper for slides */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            Our partnership with CodeLover Technology helped us
                            create and build a digital presence that represents
                            our offering and that is aligned with our name
                            “IHMCS”. Their design sense, UX expertise and
                            digital marketing capabilities have built our online
                            presence and helped source leads and business
                            opportunities, which was the brief given to them. We
                            have been particularly happy with their eye for
                            detail, their aesthetic sense and customer focus.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 pt-3">
                            <img
                              src={SSL}
                              width="130"
                              height="110"
                              className="rounded-circle img-responsive"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-lg-block"></div>
                            <h4>
                              <strong>Ajeet Chaudhary</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Managing Director</span>
                              <br></br>
                              <span>IHMCS</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            CodeLover Technology has helped us gain online
                            visibility which has resulted in an increase in
                            clients and business inquiries. CLT is very
                            knowledgeable in the digital marketing field. With
                            this and Parvinder’s trusted business partners/
                            connections he really can provide the whole package.
                            I have and will continue to gladly recommend CLT to
                            friends and business connections.{" "}
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 pt-4">
                            <img
                              src={WebD}
                              width="130"
                              height="110"
                              className="rounded-circle img-responsive "
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-lg-block"></div>
                            <h4>
                              <strong>Chandan Mishra</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Motivational Speaker</span>
                              <br></br>
                              {/* <span>IMS Technologies</span> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            Working with CLT technologies was a pleasant
                            experience. Things that stand out in particular
                            about them are – Their services, their quick
                            response to queries, they were always available to
                            provide feedback as the project went along.
                            Secondly, they demonstrated a clear understanding of
                            the scope and nature of the project and delivered
                            accordingly.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row text-lg-start">
                          <div className="col-sm-2 pt-4 align-items-center">
                            <img
                              src={Signature}
                              width="130"
                              height="110"
                              className="rounded-circle img-responsive"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-md-block"></div>
                            <h4>
                              <strong>Dr. Jitendra Sigh Raghuvansi</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Founder</span>
                              <br></br>
                              <span>Crasmib</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg  testimonial_content">
                            CodeLover Technology helped us contemporize and
                            align with the new normal. The creative input for
                            the new logo, page designs and UX built by them has
                            made our website at par or probably better than
                            global benchmarks.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row text-lg-start">
                          <div className="col-sm-2 pt-4 align-items-center">
                            <img
                              src={Backup}
                              width="130"
                              height="142"
                              className="rounded-circle img-responsive"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-md-block"></div>
                            <h4>
                              <strong> Mrs. Amresh </strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Founder</span>
                              <br></br>
                              <span>Biosol India</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="controls push-right">
                  <a
                    className="left fa fa-chevron-left btn btn-outline-light"
                    href="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  ></a>
                  <a
                    className="right fa fa-chevron-right btn btn-outline-light"
                    href="#carouselExampleCaptions"
                    data-bs-slide="next"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  
    </>
  );
}

export default Artificial;
