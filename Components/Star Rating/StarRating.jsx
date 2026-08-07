import { useState } from "react";

const StarRating = () => {
  let stars = [0, 1, 2, 3, 4];

  const [filledStars, setFilledStars] = useState([]);
  const [ratedStars, setRatedStars] = useState([]);

  const fillStars = (index) => {
    let temp = [];

    for (var i = 0; i <= index; i++) {
      temp.push(i);
    }

    setFilledStars(temp);
  };

  const unFillStars = () => {
    setFilledStars([]);
  };

  const setRating = (index) => {
    let temp = [];

    for (var i = 0; i <= index; i++) {
      temp.push(i);
    }

    setFilledStars(temp);
    setRatedStars(temp);
  };

  return (
    <>
      <h1>Star Component</h1>
      {stars.map((item, index) => (
        <span
          onMouseEnter={() => {
            fillStars(index);
          }}
          onMouseLeave={() => {
            unFillStars();
          }}
          onClick={() => {
            setRating(index);
          }}
        >
          {filledStars.includes(index) || ratedStars.includes(index)
            ? "★"
            : "☆"}
        </span>
      ))}
      <span> Your Rated :: {ratedStars.length} </span>
    </>
  );
};

export default StarRating;
