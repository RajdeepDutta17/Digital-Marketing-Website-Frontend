import React from "react";
import "../styles/AboutMe.css";
import AboutMeImage from "../images/who-we-are.png";

const AboutMe = () => {
  return (
    <section className="myAboutMeSection">
      <div className="container">
        <div className="myAboutMeHeading">About Us</div>
        <div className="myAboutMeSubHeading">
          <img src={AboutMeImage} alt="About Us" />
        </div>
        <div className="myAboutMePara">
          <p>
            Our corporate existence is based on a Holy Trinity. Total Customer
            Satisfaction through Comprehensive Solutions, Quality of Service and
            Innovative Ideas, the TRIDENT on which TRANSINFO SOLUTIONS was
            established in the year 2000.
          </p>
          <p>
            A young company based in Kolkata (Calcutta), India, owned and
            managed by Technopreneurs who have a good amount of experience in
            Information Technology, Management, Social Networking and other
            related fields. Transinfo Solutions has the infrastructure to create
            an intellectually stimulating and conductive environment that will
            transform it into a leading technology enterprise generating high
            value added products and services. It was established with the
            vision to become one of the leading Information Technology Service
            providing companies in India, by continuously striving for
            excellence through quality and innovation. It excels in providing
            the customer the freedom to focus on their core business while
            taking care of their total IT needs.
          </p>
        </div>
        <div className="myAboutMeMissionStatement">Our Mission Statement</div>
        <ul>
          <li>
            To provide comprehensive solution and arrange for capacity with top
            class products and Services for our clients.
          </li>
          <li>
            To make a niche in the market for the product and services we deal
            in.
          </li>
          <li>
            To forge lasting working relationship with prime organizations and
            translate their experience as benefits to our clients.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
