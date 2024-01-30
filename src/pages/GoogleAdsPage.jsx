import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAds from "../components/GoogleAds";
import Support from "../components/Support";

const GoogleAdsPage = () => {
  return (
    <>
      <Header />
      <main>
        <GoogleAds />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default GoogleAdsPage;
