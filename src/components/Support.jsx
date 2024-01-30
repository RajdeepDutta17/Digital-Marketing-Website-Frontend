import React from "react";
import "../styles/Support.css";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="mySupportSection">
      <div className="container">
        <div className="mySupportBox">
          <div className="mySupportHeading">Get Started Now!</div>
          <div className="mySupportContent">
            <Link to="/contact" className="myLink">
              <img src={require("../images/call2action.png")} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
