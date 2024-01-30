import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleWorkspace from "../components/GoogleWorkspace";
import Support from "../components/Support";

const GoogleWorkspacePage = () => {
  return (
    <>
      <Header />
      <main>
        <GoogleWorkspace />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default GoogleWorkspacePage;
