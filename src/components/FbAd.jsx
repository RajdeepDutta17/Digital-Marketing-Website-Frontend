import React from "react";
import "../styles/FbAd.css";

const FbAd = () => {
  return (
    <section className="myFbSection">
      <div className="container">
        <div className="myFbBox">
          <div className="myHeading">Facebook Advertising</div>
          <div className="myPara">
            With over a billion active facebook users worldwide,Facebook is by
            far the biggest social network in the world and facebook advertising
            is the perfect tool to allow advertisers to connect with users as
            per their choice and preferences.
          </div>
          <div className="myImage">
            <img
              src={require("../images/tisfbadvt.jpg")}
              alt="Facebook Advertising"
            />
          </div>
          <div className="myContent">
            <p>
              We offer several facebook advertising solutions to suit your exact
              campaign requirements and budget, whether it's using social ads,
              home page ads or sponsored stories.
            </p>
            <p>
              Facebook advertising is the perfect way to reach broad and niche
              markets precisely. Advertise to your exact audiences, based on
              specific social and geographical information-
              age,gender,location,personal interest, or job functions can be
              used to refine targeting.
            </p>
            <p>
              Basically, we define your ideal target audience and then develop a
              perfect facebook advertising campaign to suit your objectives.
            </p>
            <div>Our Facebook Marketing Service:</div>
            <div className="container">
              <ul>
                <li>
                  <span>Facebook Audience Identification - </span>Finding and
                  targeting your perfect audience including estimated audience
                  size and costs to advertise.
                </li>
                <li>
                  <span>Facebook Page Development - </span>We can design, build
                  and maintain a bespoke facebook page to your exact business
                  requirements.
                </li>
                <li>
                  <span>Creative Design - </span>We will create all images used
                  for the ads with some excellent creative ideas, designed
                  especially for your target audience.
                </li>
                <li>
                  <span>Statistical Monitoring - </span>Using a combination of
                  facebook insights and google analytics we are able to report
                  back on the progress of the campaign in detail. This includes
                  demographic data reporting on who is engaging with your ads
                  and page.
                </li>
                <li>
                  <span>ROI Reporting - </span>We keep you updated with monthly
                  ROI performance reports detailing the exact expenditure vs
                  conversion rate.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FbAd;
