import React from "react";
import Header from "../components/Header";
import Domain from "../components/Domain";
import Footer from "../components/Footer";
import Support from "../components/Support";

const DomainHostingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Domain />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default DomainHostingPage;
