import React from "react";
import "../styles/WebsiteDevelopment.css";

const WebsiteDevelopment = () => {
  return (
    <section className="myWebsiteDevelopmentSection">
      <div className="container">
        <div className="myWebsiteDevelopmentBox">
          <div className="myHeading">Website Development</div>
          <div className="myImage">
            <img src={require("../images/website-development.png")} alt="" />
          </div>
          <div className="container">
            <div className="myContent">
              <p>
                Our web development team consists of creative and design gurus
                experienced in latest and most sophisticated design tools. Our
                programmers take care of the backend coding from the trivial to
                the most complex programming requirements. We also have a crack
                team of visualisers, copywriters and network specialists who
                chip in whenever they are required.
              </p>
              <p>
                At Transinfo Solutions, we believe that every client and his
                requirement is unique. Our design service team therefore, has
                the expertise to meet all of your needs from corporate identity
                and branding to architecting a fully interactive portal
                experience. Our designers can masterfully craft your website by
                focusing on visual design complexities such as: Target Audience
                Psychology, Advanced Colour Theory, User Interface Design,
                Extensible and scalable layouts and Browser Compatibility
                Engineering.
              </p>
              <p>
                Whether the requirements entail a simple corporate presence, a
                complete website overhaul, or an advanced template based portal
                design, Transinfo Solutions can custom deliver an experience
                that is viewer pleasing, navigationally intuitive and fittingly
                brand focused to your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
