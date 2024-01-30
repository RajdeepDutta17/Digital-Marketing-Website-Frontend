import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMediaManagement from "../components/SocialMediaManagement";
import Support from "../components/Support";

const SocialMediaManagementPage = () => {
  return (
    <>
      <Header />
      <main>
        <SocialMediaManagement />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default SocialMediaManagementPage;
