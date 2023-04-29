import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconStar from "../images/icon-star.svg";
function Home() {
  const [ratingScore, setRatingScore] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (ratingScore > 0)
      navigate("/results", { state: { rating: ratingScore } });
    else alert("Please choose a rating score!");
  };
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-elements">
          <span className="dot">
            <img src={iconStar} alt="star-icon" />
          </span>
          <h3>How did we do?</h3>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating-elements">
            <span>
              <input
                type="radio"
                value="1"
                name="rating"
                id="rating-1"
                onClick={(e) => setRatingScore(e.target.value)}
              />
              <label className="dot" htmlFor="rating-1">
                1
              </label>
            </span>
            <span>
              <input
                type="radio"
                value="2"
                name="rating"
                id="rating-2"
                onClick={(e) => setRatingScore(e.target.value)}
              />
              <label className="dot" htmlFor="rating-2">
                2
              </label>
            </span>
            <span>
              <input
                type="radio"
                value="3"
                name="rating"
                id="rating-3"
                onClick={(e) => setRatingScore(e.target.value)}
              />
              <label className="dot" htmlFor="rating-3">
                3
              </label>
            </span>
            <span>
              <input
                type="radio"
                value="4"
                name="rating"
                id="rating-4"
                onClick={(e) => setRatingScore(e.target.value)}
              />
              <label className="dot" htmlFor="rating-4">
                4
              </label>
            </span>
            <span>
              <input
                type="radio"
                value="5"
                name="rating"
                id="rating-5"
                onClick={(e) => setRatingScore(e.target.value)}
              />
              <label className="dot" htmlFor="rating-5">
                5
              </label>
            </span>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
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
        . Coded by{" "}
        <a href="/#">
          Kabir
        </a>
        .
      </div>
    </>
  );
}

export default Home;
