import React from "react";
import "./Home.css"
import '../../images/iteration-1-images/home-banner.png'

export default function Home ({onButtonClick}) {
    const scrollToForm = () => {
        document.getElementById("order-pizza").scrollIntoView({ behavior: "smooth" });
      };
return (
    <div className="home-page">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <p>KOD ACIKTIRIR <br/>
            PİZZA, DOYURUR
        </p>
        <button onClick={onButtonClick} className="button" >ACIKTIM</button>
    </div>
)
}
