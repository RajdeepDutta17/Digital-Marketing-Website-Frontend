import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="myContactPageSection">
      <div className="myContactPageHeadingBox">
        <div className="myContactPageHeading">How to Reach Us?</div>
      </div>
      <div className="myContactPageBackgroundImageSection">
        <div className="container">
          <div className="myRow">
            <div className="myCol">
              <div className="myGoogleMap">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1665063472683!2d88.34866747534444!3d22.572874979491594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ba612c4dcd%3A0x6544057aaf091de8!2sTransinfo%20Solutions!5e0!3m2!1sen!2sin!4v1704818213330!5m2!1sen!2sin"
                  width="300"
                  height="300"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="myCol">
              <div className="myLocation">
                <div className="myLocationHeading">Office Location</div>
                <div className="myCompanyName">Transinfo Solutions</div>
                <div className="myCompanyAddress">
                  <p>1 Old Court House Corner</p>
                  <p>Tobacco House</p>
                  <p>1st Floor,Suite 12</p>
                  <p>Kolkata-700001</p>
                  <p>India</p>
                </div>
                <div className="myCompanyContactDetails">
                  <p>
                    <span>Phone: </span>
                    <strong>033-4044 8910/90739 42060</strong>
                  </p>
                  <p>
                    <span>Email: </span>
                    <a href="mailto:contact@transinfosolutions.com">
                      contact@transinfosolutions.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
