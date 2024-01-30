import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Support from "../components/Support";
import WebsiteDevelopment from "../components/WebsiteDevelopment";

const WebsiteDevelopmentPage = () => {
  return (
    <>
      <Header />
      <main>
        <WebsiteDevelopment />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteDevelopmentPage;
