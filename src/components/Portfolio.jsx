import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Portfolio.css";
import portfolioData from "../datas/Portfolio";
import { FaEye } from "react-icons/fa";

const Portfolio = () => {
  const { pathname } = useLocation();
  // const hello = useLocation();
  // console.log(hello);

  return (
    <>
      <section className="myPortfolioSection">
        <div className="container">
          <div className="myHeading">
            <div className="myTitle">Portfolio</div>
            <p className="myPara">
              We handle a large variety of projects. Please have a look at our
              portfolio.
            </p>
          </div>
          <div className="myPortfolioImage">
            <div className="myRow">
              {portfolioData.map(({ id, image, link, siteName }, index) => {
                return (
                  <Fragment key={index}>
                    {(pathname === "/"
                      ? id <= portfolioData.length / 2
                      : true) && (
                      <div className="myCol">
                        <div className="myImage">
                          <img src={image} alt="portfolioImage" />
                          <div className="myOverlay">
                            <div className="myDestinationName">{siteName}</div>
                            <div className="myDestination">
                              <div className="myIcon">
                                <FaEye />
                              </div>
                              <a href={link} target="_new">
                                View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={pathname === "/" ? "myBtn" : "myBtn hidden"}>
            <Link to="/portfolio" className="myBtnLink">
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
