import React from "react";
import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" />
      <article className="header">
        <h1 className="header-font white-text h1-tag">
          <span style={{ fontFamily: "'Cedarville Cursive', cursive" }}>Hey <br></br></span>
          <span className="pink-text" style={{ fontFamily: "'Cedarville Cursive', cursive" }}>Boomica</span>
          <br />
        </h1>
        <p className="gray-text p-tag">You Many more happy returns of the Day</p>
        <Link className="pink-text" to="/portfolio">
          Happy Bday
        </Link>
      </article>
    </>
  );
};

export default HeaderPreview;
