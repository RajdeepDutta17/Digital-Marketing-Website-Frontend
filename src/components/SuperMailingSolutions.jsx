import React from "react";
import "../styles/SuperMailingSolutions.css";

const SuperMailingSolutions = () => {
  return (
    <section className="mySuperMailingSolutionsSection">
      <div className="container">
        <div className="mySuperMailingSolutionsBox">
          <div className="myHeading">Super Mailing Solutions</div>
          <div className="myPara">
            Following options for bulk mailing, with a detailed control panel,
            contact group manager and easy to use application.
          </div>
          <div className="myTable">
            <table>
              <caption>Features</caption>
              <tr>
                <td>Create & Send Emails</td>
                <td>No CC, no BCC, no "undisclosed recipients"</td>
              </tr>
              <tr>
                <td>Email Newsletter Builder</td>
                <td>Built-in Editor</td>
              </tr>
              <tr>
                <td>Upload your own HTML files</td>
                <td>Send Plain Text Newsletters</td>
              </tr>
              <tr>
                <td>Sender addresses library</td>
                <td>Personalize newsletters with "mail merge"</td>
              </tr>
              <tr>
                <td>Schedule e-mails for a later date and time</td>
                <td>Include Attachments</td>
              </tr>
              <tr>
                <td>Send targeted e-mails using filters</td>
                <td>Social Media Integration</td>
              </tr>
              <tr>
                <td>Forward to a Friend</td>
                <td>Test Messages</td>
              </tr>
              <tr>
                <td>Drafts</td>
                <td>Re-use previous e-mails</td>
              </tr>
              <tr>
                <td>Unlimited Image Hosting</td>
                <td>Inline CSS</td>
              </tr>
              <tr>
                <td>API automation</td>
                <td>Manage your Lists & Contacts</td>
              </tr>
              <tr>
                <td>Unlimited Groups</td>
                <td>Unlimited Fields</td>
              </tr>
              <tr>
                <td>Easily Import Contacts</td>
                <td>Automated list de-duplication & cleanup</td>
              </tr>
              <tr>
                <td>Edit contacts as in a spreadsheet</td>
                <td>Export contacts at any time</td>
              </tr>
              <tr>
                <td>Segmentation using filters</td>
                <td>Bulk unsubscribe contacts</td>
              </tr>
              <tr>
                <td>Automated unsubscribe handling</td>
                <td>Automated bounce back handling</td>
              </tr>
            </table>
            <table>
              <caption>Plans & Pricing</caption>
              <thead>
                <tr>
                  <th>Plans</th>
                  <th>Mails/Month</th>
                  <th>Price INR/Month</th>
                  <th>Minimum Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2500</td>
                  <td>1250</td>
                  <td>3 months</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>7500</td>
                  <td>2000</td>
                  <td>3 months</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>12500</td>
                  <td>3000</td>
                  <td>2 months</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>20000</td>
                  <td>4000</td>
                  <td>2 months</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>30000</td>
                  <td>5000</td>
                  <td>2 months</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>50000</td>
                  <td>6000</td>
                  <td>2 months</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>100000</td>
                  <td>9000</td>
                  <td>2 months</td>
                </tr>
              </tbody>
            </table>
            <div className="container">GST extra.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperMailingSolutions;
