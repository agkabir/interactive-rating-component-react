import React from "react";
import iconIllustration from "../images/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";
function Results() {
  const location = useLocation();
  return (
    <>
    <div className="container">
      <div className="thank-you">
        <img src={iconIllustration} alt="thank-you" />
        <p className="rating-text">
          You selected {location.state.rating} out of 5
        </p>
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
    <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/#">Kabir</a>.
      </div>
    </>
  );
}

export default Results;
