import React from "react";
import "./Outsourcing.css";
import outsourcing from "../images/Outsourcing3.png";

function Outsourcing() {
  return (
    <>
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
                        SEO
                      </span>{" "}
                      Outsourcing
                      <br></br> Consulting
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
                SEO Outsourcing and Consulting for your Business
              </div>
              <div class="bluenew-text text-bold mb-5">
                We pride ourselves in honing your digital strategy for business
                outcomes that drive real results SEO Outsourcing
              </div>
              <p className="Web_content">
                Your website’s organic visibility is an important source of
                quality traffic with high conversion potential. 33% of all
                search result clicks on Google go to the first organically
                ranked page and 93% clicks go to the top 10 results. Does your
                website make it to the top 10? You’re missing out on all that
                traffic if your website does not make it in the top 10 search
                results. Bring in qualified organic leads, improve brand
                awareness and increase engagement with our SEO outsourcing
                services.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 service-detail-one-image-block">
              <img src={outsourcing} alt="" className="img-fluid" />
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
                There are over 200 factors that a typical search engine
                algorithm looks at before ranking your page. Our team of SEO
                experts undertake detailed research processes to understand your
                current organic performance, industry performance and best
                practices. We then identify the key elements to be considered
                for the SEO audits. This would include a report on the current
                status of your website health, SEO score, crawlability, keyword
                research, interlinking, referral domains, certifications and so
                on.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Analysis
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Once the SEO audit is complete, our analysts ensure detailed
                analysis of all the reports. The insights and visualisations are
                then used to identify individual points where the website is not
                performing as per the expected standards and narrow down on
                certain focus areas to create a detailed SEO strategy.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Strategy
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                Our SEO strategy experts then work with the specific areas of
                improvement identified in the audit to create a complete SEO
                strategy. This detailed plan includes areas such as list of high
                volume focus keywords, content strategy, acquiring backlinks &
                referral domains, optimising titles, meta descriptions, etc. The
                detailed strategic plan will then be sent to you for approval.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Optimization
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                When the complete SEO strategy is in place, our SEO
                implementation experts work on each of identified elements in
                the strategy and execute the required steps for on page as well
                as off page SEO. This is the phase where our team is working on
                optimizing your existing content for focus keywords, gaining
                referral links, building internal linking and URL structure,
                updating CTAs, anchor texts, website copies and image alt tags.
              </p>
              <p></p>
            </div>
          </div>
          <div class="row align-items-center case-studies-title-content-wrapp">
            <div class="col-md-4 case-studies-detail-title-block">
              <div class="case-study-detail-title blue-text text-bold">
                Learning and Action Items
              </div>
            </div>
            <div class="col-md-8 case-studies-detail-content">
              <p></p>
              <p>
                SEO is a consistent and long term effort. It takes time for the
                search engines to recrawl your website as and when the required
                changes are made. Over time you will see increasing organic
                traffic while our team monitors which keywords, content, links
                etc. are performing well and which ones aren’t. This is when we
                continue to follow SEO best practices and further optimise your
                website to maintain the increasing volume of organic visitors.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Outsourcing;
