import React from "react";
import { Link } from "react-router-dom";
import "../styles/OurClients.css";
import clientPageData from "../datas/Client";

const OurClients = () => {
  const { clientData } = clientPageData;
  return (
    <section className="ourClientSection">
      <div className="container">
        <div className="myHeading">Our Clients</div>
        <div className="myRow">
          {clientData.map(({ image }, index) => {
            return (
              <div className="myCol" key={index}>
                <div className="mySlider">
                  <Link to="/clients">
                    <img src={image} alt="Our Client's" />
                  </Link>
                </div>
              </div>
            );
          })}
          {clientData.map(({ image }, index) => {
            return (
              <div className="myCol" key={index}>
                <div className="mySlider">
                  <Link to="/clients">
                    <img src={image} alt="Our Client's" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
