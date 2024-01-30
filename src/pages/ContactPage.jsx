import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <Contact />
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
