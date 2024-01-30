import React, { useState } from "react";
import clientPageData from "../datas/Client";
import "../styles/Client.css";
import { FaAngleRight } from "react-icons/fa6";

const Client = () => {
  const { clientData, feedBackData } = clientPageData;
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    const length = feedBackData.length;

    for (let i = 0; i <= length - 1; i++) {
      if (i === index) {
        return setCurrent(i);
      }
    }
  };
  return (
    <section className="myClientPageSection">
      <div className="container">
        <div className="myClientImageCard">
          <div className="myRow">
            <div className="myCol">
              <div className="myHeading padlft">Clients</div>
              <div className="myNestedRow">
                {clientData.map(({ image }, index) => {
                  return (
                    <div className="myNestedCol" key={index}>
                      <div className="myImage">
                        <img src={image} alt="Client's Website" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="myCol">
              <div className="myHeading">Testimonials</div>
              <div className="myNestedRow2">
                {feedBackData.map(({ name, designation, comments }, index) => {
                  return (
                    <div className="myNestedCol2" key={index}>
                      <div className="myFeedBack">
                        <div
                          className={
                            index === current
                              ? "myFeedBackName activeFeedBackNameClass "
                              : "myFeedBackName"
                          }
                        >{`${name},${designation}`}</div>
                        <div
                          className={
                            index === current
                              ? "myFeedBackIcon activeFeedBackIconClass"
                              : "myFeedBackIcon"
                          }
                          onClick={() => handleClick(index)}
                        >
                          <FaAngleRight />
                        </div>
                      </div>
                      {index === current && (
                        <div className="myFeedBackComment">{comments}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
