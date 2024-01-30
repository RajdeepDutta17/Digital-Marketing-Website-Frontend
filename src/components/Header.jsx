import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import "../styles/Header.css";
import {
  FaWhatsappSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <div className="socialMediaLinks">
          <div className="container">
            <nav>
              <div className="left">
                <div className="myLogo">
                  <FaSquarePhone />
                </div>
                <span style={{ fontWeight: "900" }}>033-4044 8910</span>
              </div>
              <div className="right">
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
            </nav>
          </div>
        </div>
        <div className="myNavbar">
          <div className="container">
            <nav>
              <div className="left">
                <img src={require("../images/logo.png")} alt="logo" />
              </div>
              <div className="right ">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className={pathname === "/" ? "link activeClass" : "link"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={
                        pathname === "/about" ? "link activeClass" : "link"
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="services">
                    <Link
                      className={`link pos ${
                        pathname.startsWith("/services") ? "activeClass" : ""
                      }`}
                    >
                      Services
                      <RiArrowDropDownLine
                        style={{ transform: "translateY(25%)" }}
                      />
                    </Link>

                    <ul id="myDropdown">
                      <li
                        className={
                          pathname === "/services/domain&hosting"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/domain&hosting"
                          className="myDropdown-content"
                        >
                          Domains/Hosting
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/facebookadvertising"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/facebookadvertising"
                          className="myDropdown-content"
                        >
                          Facebook Advertising
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/googleads"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/googleads"
                          className="myDropdown-content"
                        >
                          Google Adwords
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/googleworkspace"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/googleworkspace"
                          className="myDropdown-content"
                        >
                          Google Workspace
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/socialmediamanagement"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/socialmediamanagement"
                          className="myDropdown-content"
                        >
                          Social Media Management
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/supermailingsolutions"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/supermailingsolutions"
                          className="myDropdown-content"
                        >
                          Super Mailing Solutions
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "/services/websitedevelopment"
                            ? "myDropdown-item myBackgroundColor"
                            : "myDropdown-item"
                        }
                      >
                        <Link
                          to="/services/websitedevelopment"
                          className="myDropdown-content"
                        >
                          Website Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/clients"
                      className={
                        pathname === "/clients" ? "link activeClass" : "link"
                      }
                    >
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className={
                        pathname === "/portfolio" ? "link activeClass" : "link"
                      }
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className={
                        pathname === "/contact" ? "link activeClass" : "link"
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="myHamburgerBox">
                <div className="myHamburgerIcon">
                  <GiHamburgerMenu color="white" />
                </div>
                <ul className="myHamburgerMenu">
                  <li>
                    <Link
                      to="/"
                      className={pathname === "/" ? "myLink myColor" : "myLink"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={
                        pathname === "/about" ? "myLink myColor" : "myLink"
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li id="myServices">
                    <Link
                      className={
                        pathname.startsWith("/services")
                          ? "myLink myColor"
                          : "myLink"
                      }
                    >
                      Services
                      <RiArrowDropDownLine
                        size={20}
                        style={{ transform: "translateY(25%)" }}
                      />
                      <ul>
                        <li
                          className={
                            pathname === "/services/domain&hosting"
                              ? "myBackgroundColor"
                              : ""
                          }
                        >
                          <Link
                            to="/services/domain&hosting"
                            className="myLink"
                          >
                            Domains/Hosting
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/facebookadvertising"
                              ? "myBackgroundColor"
                              : ""
                          }
                        >
                          <Link
                            to="/services/facebookadvertising"
                            className="myLink"
                          >
                            Facebook Advertising
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/googleads"
                              ? "myBackgroundColor"
                              : ""
                          }
                        >
                          <Link to="/services/googleads" className="myLink">
                            Google Adwords
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/googleworkspace"
                              ? " myBackgroundColor"
                              : ""
                          }
                        >
                          <Link
                            to="/services/googleworkspace"
                            className="myLink"
                          >
                            Google Workspace
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/socialmediamanagement"
                              ? " myBackgroundColor"
                              : ""
                          }
                        >
                          <Link
                            to="/services/socialmediamanagement"
                            className="myLink"
                          >
                            Social Media Management
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/supermailingsolutions"
                              ? " myBackgroundColor"
                              : ""
                          }
                        >
                          <Link
                            to="/services/supermailingsolutions"
                            className="myLink"
                          >
                            Super Mailing Solutions
                          </Link>
                        </li>
                        <li
                          className={
                            pathname === "/services/websitedevelopment"
                              ? "myLink myBackgroundColor"
                              : "myLink"
                          }
                        >
                          <Link
                            to="/services/websitedevelopment"
                            className="myLink"
                          >
                            Website Development
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clients"
                      className={
                        pathname === "/clients" ? "myLink myColor" : "myLink"
                      }
                    >
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className={
                        pathname === "/porfolio" ? "myLink myColor" : "myLink"
                      }
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={
                        pathname === "/contact" ? "myLink myColor" : "myLink"
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
