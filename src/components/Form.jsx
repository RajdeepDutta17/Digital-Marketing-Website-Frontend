import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Form.css";

const Form = () => {
  const { pathname } = useLocation();
  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    phoneNumber: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, emailId, phoneNumber, service, message } = form;

    if (fullName && emailId && phoneNumber && service && message) {
      // if (database === "MySQL") {
      //   fetch(
      //     "https://dmw-transinfo-api.onrender.com/api/v1/createFormForMySql",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(form),
      //     }
      //   )
      //     .then((response) => response.json())
      //     .then((result) => {
      //       console.log(result);
      //       alert(result.msg);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // } else {

      fetch(
        "https://dmw-transinfo-api.onrender.com/api/v1/createFormForMongoDB",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert(result.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill in the details in order to submit!!");
    }

    setForm({
      fullName: "",
      emailId: "",
      phoneNumber: "",
      service: "Website Development",
      message: "",
    });
  };
  return (
    <>
      <section
        className={
          pathname === "/" ? "myFormSection myBackgroundImg" : "myFormSection"
        }
      >
        <div className="myFormCard container">
          <div className="myFormHeading">
            <div className="myFormTitle">Drop Your Message</div>
            <p className="myFormPara">
              If you have queries,or would like to have any information
              updates,feel free to get in touch with us.
            </p>
          </div>
          <div className="myForm">
            <form action="" method="post" onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  style={
                    pathname === "/"
                      ? { border: "none" }
                      : { border: "1px solid #ccc" }
                  }
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  onChange={handleChange}
                  value={form?.fullName}
                />
                <label htmlFor="email">Email</label>
                <input
                  style={
                    pathname === "/"
                      ? { border: "none" }
                      : { border: "1px solid #ccc" }
                  }
                  type="email"
                  id="email"
                  name="emailId"
                  placeholder="johndoe@gmail.com"
                  onChange={handleChange}
                  value={form?.emailId}
                />
                <label htmlFor="phone">Phone</label>
                <input
                  style={
                    pathname === "/"
                      ? { border: "none" }
                      : { border: "1px solid #ccc" }
                  }
                  type="number"
                  id="phone"
                  name="phoneNumber"
                  placeholder="9999999999"
                  onChange={handleChange}
                  value={form?.phoneNumber}
                />
                <label htmlFor="myServicesDropdown">Services</label>
                <select
                  style={
                    pathname === "/"
                      ? { border: "none" }
                      : { border: "1px solid #ccc" }
                  }
                  name="service"
                  id="myServicesDropdown"
                  value={form?.service}
                  onChange={handleChange}
                >
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Domains/Hosting">Domains/Hosting</option>
                  <option value="Search Engine Marketing">
                    Search Engine Marketing
                  </option>
                  <option value="Google Adwords">Google Adwords</option>
                  <option value="Google GSuite/Cloud">
                    Google GSuite/Cloud
                  </option>
                  <option value="Facebook Management & Advertising">
                    Facebook Management & Advertising
                  </option>
                  <option value="Social Media Management">
                    Social Media Management
                  </option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Super Mailing Solutions">
                    Super Mailing Solutions
                  </option>
                </select>
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea
                  style={
                    pathname === "/"
                      ? { border: "none" }
                      : { border: "1px solid #ccc" }
                  }
                  name="message"
                  id="message"
                  placeholder="Write a message..."
                  onChange={handleChange}
                  value={form?.message}
                ></textarea>
                {/* <label htmlFor="myServicesDropdown">DataBase</label>
                <select
                  style={
                    pathname === "/"
                      ? { border: "none", marginBottom: "10px" }
                      : { border: "1px solid #ccc", marginBottom: "10px" }
                  }
                  name="database"
                  id="myServicesDropdown"
                  value={form?.database}
                  onChange={handleChange}
                >
                  <option value="MongoDB">MongoDB</option>
                  <option value="MySQL">MySQL</option>
                </select> */}
                <button type="submit">Submit Button</button>
              </fieldset>
            </form>
          </div>

          {/* <div className="myForm">
            <div className="myRow">
              <div className="myCol">
                <div className="left">
                  <label htmlFor="fullName">Name</label>

                  <input type="text" id="fullName" name="fullName" />

                  <label htmlFor="email">Email</label>

                  <input type="email" name="email" id="email" />

                  <label htmlFor="phone">Phone</label>

                  <input type="number" name="phone" id="phone" />

                  <label htmlFor="selectDropdown">Services</label>

                  <select name="" id="selectDropdown">
                    <option value="">Website Development</option>
                    <option value="">Domains/Hosting</option>
                    <option value="">Search Engine Marketing</option>
                    <option value="">Google Adwords</option>
                    <option value="">Google GSuite/Cloud</option>
                    <option value="">Facebook Management & Advertising</option>
                    <option value="">Social Media Management</option>
                    <option value="">Mobile Apps</option>
                    <option value="">Super Mailing Solutions</option>
                  </select>
                </div>
              </div>
              <div className="myCol">
                <div className="right">
                  <label htmlFor="message">Message</label>

                  <textarea
                    name="message"
                    id="message"
                    cols="50"
                    rows="5"
                  ></textarea>

                  <input type="submit" value="Submit Message" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Form;
