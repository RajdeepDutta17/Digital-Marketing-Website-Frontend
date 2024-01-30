import React, { Fragment, useState } from "react";
import "../styles/GoogleWorkspace.css";
import Slider from "../datas/Slider";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const GoogleWorkspace = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = (operator) => {
    if (operator === "+") {
      setCurrent(current === Slider.length - 1 ? 0 : current + 1);
    } else if (operator === "-") {
      setCurrent(current === 0 ? Slider.length - 1 : current - 1);
    }
  };
  return (
    <section className="myGoogleWorkspaceSection">
      <div className="container">
        <div className="myGoogleWorkspaceBox">
          <div className="myHeading">Google Workspace</div>
          <div className="myListBox">
            <div className="myListHeading">Built for teams</div>
            <div className="container">
              <ul>
                <li>
                  Faster completion of work - Google Workspace helps you and
                  your team work faster and smarter by making it easy for
                  everyone - employees, partners, vendors, anyone - to
                  collaborate effortlessly across teams, companies and
                  locations.
                </li>
                <li>
                  Google Workspace lets you share and edit many types of files -
                  docs, spreadsheets, presentations and more - in real time.
                  Forget all the time-wasting email back and forth over multiple
                  file versions; storing docs in the cloud means everyone
                  automatically has the latest version of any file. Doesn't that
                  make sense?
                </li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">Security First</div>
            <div className="container">
              <ul>
                <li>
                  Google Workspace includes dozens of critical security features
                  specifically designed to keep your data safe, secure and in
                  your control.
                </li>
                <li>
                  Your data belongs to you, and Workspace tools enable you to
                  control it, including who you share it with and how you share
                  it.
                </li>
                <li>
                  Google data center network provides exceptional security and
                  guarantees reliable access to your data, 24 x 7 x 365
                </li>
                <li>Your work is always backed up</li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">Stay connected from anywhere</div>
            <div className="container">
              <ul>
                <li>
                  With Google Workspace, all your work is automatically saved in
                  the cloud. You'll have to access to your email, calender,
                  documents and sites and be able to work securely, no matter
                  where you are in the world and what device you're on.
                </li>
                <li>
                  For your business, this means every employee and everyone you
                  work with can be productive from anywhere, using any device
                  with an Internet connection.
                </li>
                <li>
                  Mobile Device Management & BYOD: Complete Admin controls and
                  device policies to manage your Android, iPhone, or any
                  Activesync compliant devices (Mobile Phones, Tablets,Computers
                  etc)
                </li>
                <li>
                  Mobile Access & seamless sync with Android, iPhone and other
                  popular smart phones and devices
                </li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">Get stuff done faster</div>
            <div className="container">
              <ul>
                <li>
                  Google Workspace can help streamline everyday tasks like
                  preparing notes, quote or marketing formats, approvals, forms,
                  reports needed for marketing, sales, accounts, finance
                  teams,budgeting, scheduling and more.
                </li>
                <li>
                  You can create an invoice template in Google Drive, balance
                  your budget by sharing a single spreadsheet or let Google
                  Calendar suggest times for your team to meet. By removingthese
                  time-consuming bottlenecks, GSuite frees you up to spend more
                  time on the work that really matters.
                </li>
                <li>
                  Familiar tools for your employees: Google Workspace like
                  Gmail, Drive, and Calendar are already used by hundreds of
                  millions of businesses, organizations and individuals
                  worldwide. This means you can spend less time training your
                  employees, or learning how to use these tools yourself.
                </li>
                <li>
                  Always Updated software version: Why waste another minute
                  installing software updates and patches when you can just hit
                  refresh on your browser to be running the most up-to-date
                  version of Google Workspace?
                </li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">
              Online document storage for files of any type
            </div>
            <div className="container">
              <ul>
                <li>
                  Unlimited storage for supported formats(Google Docs, Slides,
                  Spreadsheets, forms) and 30GB for all others (Combined space
                  for Mail + Drive)
                </li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">100% web-based</div>
            <div className="container">
              <ul>
                <li>No software, hardware, or maintenance needed</li>
                <li>
                  Your IT Team can manage everything from a centralized control
                  panel
                </li>
                <li>
                  Your IT policies and IT Admin can enforce all security
                  policies to suit your requirement
                </li>
              </ul>
            </div>
          </div>
          <div className="myListBox">
            <div className="myListHeading">Highly Affordable</div>
            <div className="container">
              <ul>
                <li>
                  Shift from Capex to Opex (Rental model and pay as you use).
                </li>
                <li>
                  You'll save costs by avoiding additional hardware or software
                </li>
              </ul>
            </div>
          </div>
          <div className="myImage">
            <img
              src={require("../images/google-work-partner-footer.png")}
              alt="Google Workspace Logo"
            />
          </div>
          <div className="mySliderBox">
            <div className="mySliderHeading">Google Workspace Key Features</div>
            {Slider.map(({ image }, index) => {
              return (
                <Fragment key={index}>
                  {index === current && (
                    <div className="mySlider">
                      <div className="iconRight">
                        <AiFillRightCircle onClick={() => handleClick("+")} />
                      </div>
                      <div className="iconLeft">
                        <AiFillLeftCircle onClick={() => handleClick("-")} />
                      </div>
                      <div className="mySliderImage">
                        <img src={image} alt="Slider" />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleWorkspace;
