import React, { Fragment, useState } from "react";
import "../styles/Carousel.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import carouselData from "../datas/Carousel";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const myHandleSlide = (operation) => {
    if (operation === "-") {
      setCurrent(current === 0 ? carouselData.length - 1 : current - 1);
    } else if (operation === "+") {
      setCurrent(current === carouselData.length - 1 ? 0 : current + 1);
    }
  };
  return (
    <>
      <section className="myCarousel">
        <div className="myBackgroundImage">
          <FaChevronLeft
            className="leftArrow"
            onClick={() => myHandleSlide("-")}
          />
          <FaChevronRight
            className="rightArrow"
            onClick={() => myHandleSlide("+")}
          />
          <div className="container">
            <div className="myRow">
              {carouselData.map(({ title, para, image, alt, link }, index) => {
                return (
                  <Fragment key={index}>
                    {index === current && (
                      <div className="myCol">
                        <div className="leftCarouselItems">
                          <h1>{title}</h1>
                          <p>{para}</p>
                          {index !== 0 && (
                            <Link to={link} className="myBtnLink">
                              Read More
                            </Link>
                          )}
                        </div>
                        <div className="rightCarouselItems">
                          <img
                            className="myCarouselImage"
                            src={image}
                            alt={alt}
                          />
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
              {/* <div className="myCol">
                {carouselData.map(({ title, para }, index) => {
                  return (
                    <div key={index}>
                      <h1>{title}</h1>
                      <p>{para}</p>
                      <button>Read More</button>
                    </div>
                  );
                })}
              </div>
              <div className="myCol">
                {carouselData.map(({ image, alt }, index) => {
                  return (
                    <div key={index}>
                      <img src={image} alt={alt} />
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
