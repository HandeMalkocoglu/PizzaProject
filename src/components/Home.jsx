import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page" data-cy="home-page">
      <img src="../../images/iteration-1-images/logo.svg" alt="" />
      <p>
        KOD ACIKTIRIR <br />
        PİZZA, DOYURUR
      </p>
      <Link to="/order">
        <button data-cy="home-button" className="button">
          ACIKTIM
        </button>
      </Link>
    </div>
  );
}
