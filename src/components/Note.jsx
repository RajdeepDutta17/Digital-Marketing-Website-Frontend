import React from "react";
import "../styles/Note.css";
import { FaHandPointRight } from "react-icons/fa";

const Note = () => {
  return (
    <>
      <section className="myNoteSection">
        <div className="container">
          <div className="myNoteBox">
            <div className="myLogo">
              <FaHandPointRight />
            </div>
            <div className="myNote">
              <p>
                Transinfo is now Google Workspace Authorised Partner in Kolkata
                - For Sales, Technical Support, Guidance and Setup.
              </p>
              <p>
                Transinfo is now Google Ads Partner in Kolkata - For Google
                Search, Google Display, Mobile Advertising, Youtube Campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Note;
