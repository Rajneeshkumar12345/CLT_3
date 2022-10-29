import React from "react";
import "./Ui.css";

import Backup from "../images/Backup.png";
import Signature from "../images/Signature.png";
import SSL from "../images/SSL.png";
import WebD from "../images/WebD.png";

import Uii from "../images/Ui.png";

function Ui() {
  return (
    <>
    <div className="Ui">
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
                        UI/UX
                      </span>{" "}
                      <br></br> Design
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
                Best in class UI/UX Designs for Your Business
              </div>
              <div class="bluenew-text text-bold mb-5">
                We pride ourselves in honing your digital strategy for business
                outcomes that drive real results
              </div>
              <p className="Web_content">
                CodeLover Technology recognizes that with the current scenario
                of advancing technologies, it is an inherent marketing strategy
                to implement UX/UI Design. Consumers are looking for a smooth,
                efficient and convenient experience, brands that cater well to
                it succeed in performing better in business. There’s no denying
                that UX/UI design is a game-changer for your business. For a
                start-up or a large corporate alike, the user experience plays a
                vital role and CodeLover Technology understands this and gives
                UX/UI projects the due importance they deserve. CodeLover
                Technology has built an expert in-house team that is trained on
                UX/UI design projects to ensure that our clients can meet the
                discerning consumer demands of a seamless interface while
                browsing any screen be it laptop or tablet or smartphone. We
                know that today a well-designed user interface (UI) is a must
                for any digital product like a mobile app, website, and even
                enterprise software. Thus, CodeLover Technology’ team
                strategizes and implements the latest technologies and tools
                that create an impactful experience for users. The team executes
                projects to make it more UX/UI sustainable to perform seamlessly
                and increases your engagements and conversions.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 service-detail-one-image-block">
              <img src={Uii} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section class="gap-top">
        <div class="container mt-5">
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Discovery
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                A functional experience is covered by UX and the necessary and
                interactive visualization is covered by UI hence they work
                closely on interdependence. It’s about one egg in many baskets
                considering the access given to consumer on multiple devices
                hence the catering towards demands becomes more fluidic and
                elastic in consideration of platform. The research team at
                CodeLover Technology discusses and gains a holistic perspective
                of the client, the business and target consumers to create a
                product that is easy to navigate, and boosts the interaction and
                experience over several iterations prior to the completion of
                the design. It is this that makes CodeLover Technology one of
                the few digital agencies that can flawlessly take a product from
                an initial idea to a finished product and beyond.
              </p>
              {/* <p></p> */}
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Sketches
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Wire framing helps us in improvising and making it a better
                website. We take inputs from the research team and stake
                holders’ feedback to work on the areas of functional
                improvement. Drafting the skeleton gives us a perspective of
                final content result and helps us in adjusting and modifying the
                wireframe. Our designer focuses on the placement of content with
                the help of excellent wire framing tools to illustrate the flow
                of your website. Our sketching team uses top of the line tools
                and new technologies to create a transformational digital
                experience for your business and consumer.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Digitization
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p>
                Experience and interaction are amongst the first few steps for a
                brand to go digital. Brands that give a good and interactive
                experience on their website have more chances of conversions.
                Your user is getting smarter and demanding more in their digital
                approach. It’s just not about using a webpage or app to browse,
                they now seek interactive platforms that deliver. CodeLover
                Technology provides you the advantage of being a data driven
                digital agency, by creating an interface and experience that is
                visually appealing, and serves your consumers’ needs. Customers
                may sometimes not notice a great user experience, but they will
                complain even if their experience is anything but awesome! User
                experience is a strategic business tool, and if you come to
                experts like CLT,who has the best UX/UI Design
                team in India you’ll see a lot of positive changes.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Color
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Colors have a great influence on human moods and certain colours
                have a specific association in our minds (it’s a pre
                conditioning for e.g. Red is Danger or Love) and hence colors
                cause a certain reaction in your consumers. UI creates a
                contrast that serves the right amount of harmony between
                different colors. Synchronization of color brings a perspective
                and a Call to Action. CodeLover Technology pays good attention
                to texts, fonts, animation and layouts to create the right set
                of combination between color groups and designs, ensuring an
                interface that connects and leaves a relevant psychological
                effect to create a better experience that also influences your
                consumer.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Final Design
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                The final delivery of design and implementation takes place in
                accordance to the amalgamation of process and work done. We
                ensure we provide support and inputs in sync with changing
                attributes of the industry standards. We deliver excellence and
                ensure the incorporation of your inputs and are always open to
                your feedback. Our constant efforts to not just meet, but exceed
                our Clients’ expectations helps us sustain and retain them in
                the long run.
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

export default Ui;
