import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { LuClock3, LuPlayCircle } from "react-icons/lu";
import {
  FaWhatsappSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="myFooter">
        <div className="footerUpperSection">
          <div className="container">
            <div className="myRow">
              <div className="myCol">
                <div className="myBox">
                  <div className="myTitle">
                    <div className="myLogo">
                      <MdWindow />
                    </div>
                    <div>Contact info</div>
                  </div>
                  <div className="myAddress">
                    <p>Transinfo Solutions</p>
                    <p>1 Old Court House Center</p>
                    <p>Tobacco House</p>
                    <p>1st Floor,Suite 12</p>
                    <p>Kolkata-700001</p>
                    <p>India</p>
                  </div>
                  <div className="myPhoneNumber">
                    <p>
                      <HiOutlinePhone />
                      Phone: <span>033-4044 8910</span>
                    </p>
                  </div>
                  <div className="myEmailAddress">
                    <p>
                      <MdOutlineEmail />
                      Email:{" "}
                      <a
                        href="mailto:contact@transinfosolutions.com"
                        style={{
                          textDecoration: "none",
                          color: "#ffbb32",
                          fontSize: "14px",
                        }}
                      >
                        contact@transinfosolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="myCol">
                <div className="myBox">
                  <div className="myTitle">
                    <div className="myLogo">
                      <MdWindow />
                    </div>
                    <div>Page links</div>
                  </div>
                  <ul className="pageLinksOptions">
                    <li>
                      <Link to="/about" className="mylink">
                        <IoIosArrowForward />
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/domain&hosting" className="mylink">
                        <IoIosArrowForward />
                        Domain & Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/facebookadvertising"
                        className="mylink"
                      >
                        <IoIosArrowForward />
                        Facebook Advertising
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/googleads" className="mylink">
                        <IoIosArrowForward />
                        Google Ads
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/googleworkspace" className="mylink">
                        <IoIosArrowForward />
                        Google Workspace
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/socialmediamanagement"
                        className="mylink"
                      >
                        <IoIosArrowForward />
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/supermailingsolutions"
                        className="mylink"
                      >
                        <IoIosArrowForward />
                        Super Mailing Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/websitedevelopment"
                        className="mylink"
                      >
                        <IoIosArrowForward />
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/clients" className="mylink">
                        <IoIosArrowForward />
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" className="mylink">
                        <IoIosArrowForward />
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="mylink">
                        <IoIosArrowForward />
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myCol">
                <div className="myBox">
                  <div className="myTitle">
                    <div className="myLogo">
                      <MdWindow />
                    </div>
                    <div>Associated with</div>
                  </div>
                  <div className="myImage">
                    <img
                      src={require("../images/google-partner-footer.png")}
                      alt=""
                    />
                    <img
                      src={require("../images/google-work-partner-footer.png")}
                      alt=""
                    />
                    <img src={require("../images/smm-footer.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="myCol myNestedRow">
                <div className="myNestedCol">
                  <div className="myBox">
                    <div className="myTitle">
                      <div className="myLogo">
                        <MdWindow />
                      </div>
                      <div>Other information</div>
                    </div>
                    <div className="myTimings">
                      <p style={{ marginBottom: "15px" }}>
                        <LuClock3 />
                        Working Hours:
                      </p>
                      <p>
                        <LuPlayCircle />
                        Monday-Friday(10am-6pm)
                      </p>
                      <p>
                        <LuPlayCircle />
                        Saturday(10am-2pm)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="myNestedCol">
                  <div className="myBox">
                    <div className="myTitle">
                      <div className="myLogo">
                        <MdWindow />
                      </div>
                      <div>Social update</div>
                    </div>
                    <div className="mySocialMediaIcons">
                      <a href="https://web.whatsapp.com/" target="_new">
                        <FaWhatsappSquare />
                      </a>
                      <a href="https://www.facebook.com/" target="_new">
                        <FaSquareFacebook />
                      </a>
                      <a href="https://twitter.com/" target="_new">
                        <FaSquareXTwitter />
                      </a>
                      <a href="https://in.linkedin.com/" target="_new">
                        <FaLinkedin />
                      </a>
                      <a href="https://www.instagram.com/" target="_new">
                        <FaInstagramSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="myBorder"></div>
        <div className="footerBottomSection">
          <div className="container styling">
            <p>
              Copyright &copy; 2023 Transinfo Solutions. All Rights Reserved.
              Google and the Google logo are trademarks of Google Inc. All other
              company and product names may be trademarks of the respective
              companies with which they are associated.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
