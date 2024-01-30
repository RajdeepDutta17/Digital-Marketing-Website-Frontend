import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Carousel from "../components/Carousel";
import WelcomePage from "../components/WelcomePage";
import Note from "../components/Note";
import Portfolio from "../components/Portfolio";
import OurClients from "../components/OurClients";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <WelcomePage />
        <Note />
        <Portfolio />
        <OurClients />
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Home;
