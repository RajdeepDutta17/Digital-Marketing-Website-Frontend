import React from "react";
import FbAd from "../components/FbAd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Support from "../components/Support";

const FacebookAdvertisingPage = () => {
  return (
    <>
      <Header />
      <main>
        <FbAd />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default FacebookAdvertisingPage;
