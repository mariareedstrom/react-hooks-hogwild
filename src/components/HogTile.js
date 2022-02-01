import React, { useState } from "react";

function HogTile({ hog }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="pigTile" onClick={handleClick}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.specialty}></img>
      {clicked ? <p>Specialty: {hog.specialty} </p> : null}
      {clicked ? <p>Greased: {hog.greased ? "oh yeah!" : "nope"} </p> : null}
      {clicked ? <p>Weight: {hog.weight} </p> : null}
      {clicked ? (
        <p>Highest Medal Achieved: {hog["highest medal achieved"]} </p>
      ) : null}
    </div>
  );
}

export default HogTile;
