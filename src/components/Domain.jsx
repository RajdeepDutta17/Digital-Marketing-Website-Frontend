import React from "react";
import "../styles/Domain.css";

const Domain = () => {
  return (
    <section className="myDomainSection">
      <div className="container">
        <div className="myDomainContentBox">
          <div className="myHeading">Domain & Hosting</div>
          <div className="myImage">
            <img src={require("../images/domain-hosting.png")} alt="" />
          </div>
          <div className="container">
            <div className="mySubHeadingBox">
              <div className="mySubHeading">Domain</div>
              <p>
                Booking your domain on the internet is your first step towards
                establishing a web presence for your organisation. Our domain
                booking procedure is simple and easy to follow. We also ensure
                that the total control of your domain rests with you,in case you
                would like to make any future updates or changes for your
                domain.
              </p>
              <p>
                Our online portal{" "}
                <a
                  href="http://www.superwebsite.in"
                  target="_new"
                  style={{ textDecoration: "none", color: "#ffab32" }}
                >
                  http://www.superwebsite.in
                </a>{" "}
                is ready for the domain registration and renewal, with host of
                other tools for your need. We have more than 100 options for the
                domains available for you to choose.
              </p>
            </div>
            <div className="mySubHeadingBox">
              <div className="mySubHeading">Hosting</div>
              <p>
                We have 2 options: Premium India Hosting and Economy Range USA
                Hosting.
              </p>
              <div className="mySubSubHeadingBox">
                <div className="mySubSubHeading">
                  Transinfo Premium India Hosting Services
                </div>
                <p>
                  Transinfo Solutions specializes in web hosting services backed
                  by superior redundancy, a high-quality, high-availability
                  network infrastructure, dedicated customer service and
                  technical support. We offer you the resources and support you
                  need to create an effective and powerful internet presence at
                  competitive prices. Our premium servers are located in
                  Mumbai,India.
                </p>
                <p>
                  We have a range to Shared Hosting packages, VPS as well as
                  Dedicated Server packages for your requirement. Just send us
                  an email to:{" "}
                  <a
                    href="mailto:contact@transinfosolutions.com"
                    target="_new"
                    style={{ textDecoration: "none", color: "#ffab32" }}
                  >
                    contact@transinfosolutions.com
                  </a>{" "}
                  with your requirement, we will be back with all details.{" "}
                </p>
              </div>
              <div className="mySubSubHeadingBox">
                <div className="mySubSubHeading">
                  Superwebsite Economy Range USA Hosting
                </div>
                <p>
                  Check our site{" "}
                  <a
                    href="http://www.superwebsite.in"
                    target="_new"
                    style={{ textDecoration: "none", color: "#ffab32" }}
                  >
                    http://www.superwebsite.in
                  </a>{" "}
                  for all the packages and options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
