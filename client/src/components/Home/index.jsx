import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <h1>Fluffr</h1>
      <p>Find your Furever Friend</p>
      <NavBar />
      <div>Home</div>
      <Footer />
    </>
  );
};

export default Home;
