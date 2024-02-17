import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./HomeComponents/Header";
import Content from "./HomeComponents/Content";

function Home() {
  return (
    <>
      <Header />
      <Content />
      <div style={{margin:"100px", width:'800px', height:'400px'}}>
        <div
          id="my-map-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Apollo+hospital,+Pune,+Sasoon+Road,+Sangamvadi,+Pune,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Home;
