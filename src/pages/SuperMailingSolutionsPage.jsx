import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuperMailingSolutions from "../components/SuperMailingSolutions";
import Support from "../components/Support";

const SuperMailingSolutionsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SuperMailingSolutions />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default SuperMailingSolutionsPage;
