import React from "react";
import Hero from "../Component/hero";
import Banner from "../Component/banner";
import { Link } from "react-router-dom";
import "../App.css";
import Services from "../Component/services";
import RoomsData from "../Component/roomdata";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="lunxirous rooms"
          subtitle="these rooms start with RS:1000"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <RoomsData />
    </>
  );
}

export default Home;
