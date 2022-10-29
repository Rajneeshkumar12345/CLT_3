import React from "react";
import "./Android.css";
import Android1 from "../images/Android_Service.png";
import Backup from "../images/Backup.png";
import Signature from "../images/Signature.png";
import SSL from "../images/SSL.png";
import WebD from "../images/WebD.png";

function Android() {
  return (
    <>
    <div className="Android">
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
                        Mobile App
                      </span>{" "}
                      <br></br>
                      Development
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
                    {/* <a
                      href="https://www.CodeLover Technology.com/our-work/"
                      class="CodeLover Technology-button bt2"
                    >
                      <button className="btn btn-success ms-1">
                        {" "}
                        See Our Portfolio
                      </button>
                    </a> */}
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
                Android Mobile Applications for your Business
              </div>
              <div class="bluenew-text text-bold mb-5">
                We pride ourselves in honing your digital strategy for business
                outcomes that drive real results
              </div>
              <p className="Web_content">
                With over 2.5 billion active users as of May 2019, the reach
                provided by Android apps is huge. Businesses today are getting
                into mobile app development with the intention of higher
                business revenue. CodeLover Technology provides Android App Development
                services to its clients to go digital and mobile. Our solutions
                are custom made and are tailored as per your project needs so
                that the application we develop for you delivers real business
                value. An App that provides instant access to your online
                presence and offerings must have a predefined goal that it aims
                to achieve for the business. Our developers understand the
                psychology and potential of apps, and we realise that while
                convenience is important, we also aid our clients to define the
                purpose of the app and then we tailor our internal process in
                order to achieve it.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 service-detail-one-image-block">
              <img src={Android1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section class="gap-top">
        <div class="container">
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Discovery
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                We begin by fully immersing ourselves into knowing your target
                audience better, we deep dive to research the user needs of your
                customers and map it against the goal of your app, what players
                offering similar solutions as the client’s business are already
                providing – basically its entails scoping the market to decide
                the mobile app to be developed. It helps us draw the required
                engineering map for the app. Keeping your budget in mind, we
                develop estimates and resources to prototype the app. The reason
                is a deeply researched and well-designed roadmap.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Wire-Frames
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                After the basic idea is ready, our team creates visually
                appealing and utility-driven samples for you to choose. This
                stage puts the app into shape, based on the direction and
                clarity gained on the project framework during the Discovery
                stage. We pay close attention to the design of your future
                product. It is here that all the functional specifications and
                aspects relating to the app’s features, user flows, UI & tech
                implications are weighed and the technology which is most
                appropriate to you is finalised. Our UX team determines the best
                ways to enhance the app via animations, graphics, gestures and
                simplification.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                UI/UX
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Once through with the wireframing, our team sketches up the
                prototype to a feature-rich Android solution. Our UX/UI team
                will design the architectural plan, based on your business
                needs. Our developers carry out frontend, backend, site build,
                mobile developer tasks under the coordination of our project
                managers. We solicit inputs from our clients in this
                collaborative process to make changes, if necessary. With
                advanced algorithms and expert technical capabilities, the
                CodeLover Technology team develops a mock-up of the app for you basis your
                brief. This is a very important step and we work hard to give
                you the best customer experience to meet your business needs. It
                is here that the things on the development front are aligned
                with the designs so that there are no surprises in the end and
                that both parties are on the same page.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Release and Updates
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Our team guides you to release the apps to the store. As the app
                goes live, CodeLover Technology provides application lifecycle management
                services via updates and improvements. We ensure the app stays
                live and relevant with new features and removal of bugs. Our
                work is guaranteed for client satisfaction so if you’re not
                happy, we’ll fix it till you are. We’ll even monitor your
                product after it’s completed and can provide you with an ongoing
                maintenance.
              </p>
              <p></p>
              <p>
                Let us help you drive the growth and possibilities your business
                offers with our Android App.
              </p>
            </div>
          </div>
          {/* <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Final Product
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                At CodeLover Technology , our comprehensive review exercise is based on
                following the desired outcome of the project to be delivered –
                in most cases our clients are looking at SEO friendly, modern,
                user friendly &amp; dynamic websites. Our performance reviews
                are decisive to find out the deficits or challenges faced, if
                any during the development process, which helps us to raise the
                bar over time. The review is a comprehensive report of feedback
                from you as a partner and as well as your business inputs. The
                review reports define and form the basis of our course of action
                for the future.
              </p>
              <p></p>
            </div>
          </div> */}
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

export default Android;
