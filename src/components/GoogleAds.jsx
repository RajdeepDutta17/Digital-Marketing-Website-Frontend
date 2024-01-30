import React from "react";
import "../styles/GoogleAds.css";

const GoogleAds = () => {
  return (
    <section className="myGoogleAdsSection">
      <div className="container">
        <div className="myGoogleAdsBox">
          <div className="myHeading">Google Ads</div>
          <div className="myPara">
            Google ads can work for any industry and any business no matter what
            their budget. Google promotes ads as a way in which you can target
            new audiences on google and its advertising network. By seeking out
            new, undiscovered target audiences and increasing the reach of your
            business advertising. Ads can effectively increase traffic and
            increase conversions.
          </div>

          <div className="myImage">
            <img src={require("../images/tisgle-adrds.jpg")} alt="Google Ads" />
          </div>
          <div className="mySubHeading">What We Do?</div>
          <div className="mySubImage">
            <img src={require("../images/what-we-do.jpg")} alt="What We Do" />
          </div>
          <div className="mySubPara">
            To improve your return on investment with Google Ad-Words, contact
            us today!
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAds;
