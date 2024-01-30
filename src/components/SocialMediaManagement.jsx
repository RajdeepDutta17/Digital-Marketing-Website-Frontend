import React from "react";
import "../styles/SocialMediaManagement.css";

const SocialMediaManagement = () => {
  return (
    <section className="mySocialMediaManagementSection">
      <div className="container">
        <div className="mySocialMediaManagementBox">
          <div className="myHeading">Social Media Management</div>
          <div className="myImage">
            <img
              src={require("../images/social-media-management.png")}
              alt="Social Media Management Pic"
            />
          </div>
          <div className="myPara">
            <p>
              Our social media management experts create an online buzz for your
              business. We write daily promotional content for your business and
              post it on Facebook, Twitter, Pinterest and other online medium.
            </p>
            <p>
              Our dedicated online marketing experts help business, both small
              and medium, increase their customer base through targeted online
              advertising. We help you acquire new customers for your business
              through high quality localised AdWords, Facebook, Linkedin
              campaigns. Our experts will make sure that your business gets the
              visibility it deserves, at the right place at the right time and
              to right people.
            </p>
            <p>
              Our social media marketing services are great for any business
              looking to generate brand exposure and increase sales. Our social
              media experts deliver effective marketing campaigns by displaying
              your advertisements to targeted customers that you are looking
              for.
            </p>
          </div>
          <div className="myList">
            <div className="myListHeading">
              Our Social Media Management Services Include-
            </div>
            <div className="container">
              <ul>
                <li>Facebook Page Management</li>
                <li>Facebook, Youtube, Pinterest and Twitter Advertising</li>
                <li>LinkedIn Advertising</li>
                <li>Consultancy</li>
              </ul>
            </div>
            <p>
              Also, visit our Social Media Management Portal at:{" "}
              <a
                href="www.supersmm.in"
                style={{ textDecoration: "none", color: "#ffab32" }}
              >
                www.supersmm.in
              </a>
            </p>
          </div>
          <div className="myLogo">
            <a href="www.supersmm.in">
              <img src={require("../images/supersmm.png")} alt="website logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaManagement;
