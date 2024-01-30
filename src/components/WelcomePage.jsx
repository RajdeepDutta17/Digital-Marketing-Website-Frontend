import React from "react";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaBullhorn,
  FaGooglePlusG,
  FaFacebookF,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

const WelcomePage = () => {
  return (
    <>
      <section className="myWelcomePage">
        <div className="container">
          <div className="myInfoBox">
            <h1>Welcome to Transinfo</h1>
            <p>Catalyst to multiply your business</p>

            <p>
              <span>Transinfo Solutions</span>, established in the year 2000, is
              one of leading full service Digital Marketing and Social Media
              Management services company specialises into{" "}
              <span>
                Website Hosting, Website Designing, Google Ads, Google
                Workspace, PPC Campaigns, Leads Generation Campaigns, Digital
                Marketing, Social Media Management, Facebook Advertising,
                Facebook Page Management, LinkedIn Advertising, YouTube
                Campaigns, Google Cloud Services, Times of India Ad Network
                services
              </span>{" "}
              in Kolkata, India.
            </p>
            <p>
              Modern business rules dictate that versatility is a basic law of
              survival in business, and we abide by that. We welcome you to a
              virtual tour of the realms that we reside in. We pride ourselves
              acting as a Catalyst to hundreds of business flourishing in
              Eastern India since year 2000.
            </p>
            <p>
              Transinfo is a Google Ads and Workspace Partnered agency as well.
            </p>
          </div>
          <div className="myServices">
            <div className="myRow">
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaHtml5 />
                  </div>
                  <Link to="/services/websitedevelopment" className="myLink">
                    Website Development
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <MdCloudUpload />
                  </div>
                  <Link to="/services/domain&hosting" className="myLink">
                    Domains/Hosting
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaBullhorn />
                  </div>
                  <Link to="/services/googleads" className="myLink">
                    Google Ads
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaGooglePlusG />
                  </div>
                  <Link to="/services/googleworkspace" className="myLink">
                    Google Workspace,Cloud
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaFacebookF />
                  </div>
                  <Link to="/services/facebookadvertising" className="myLink">
                    Facebook Advertising
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaUsers />
                  </div>
                  <Link to="/services/socialmediamanagement" className="myLink">
                    Social Media Management
                  </Link>
                </div>
              </div>
              <div className="myCol">
                <div className="myLinkBox">
                  <div className="myLogo">
                    <FaEnvelope />
                  </div>
                  <Link to="/services/supermailingsolutions" className="myLink">
                    Super Mailing Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
