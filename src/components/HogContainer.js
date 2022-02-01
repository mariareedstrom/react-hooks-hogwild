import React, { useState } from "react";
import HogTile from "./HogTile";
import { v4 as uuidv4 } from "uuid";

function HogContainer({ hogs }) {
  //   console.log(hogs);
  const [greased, setGreased] = useState(false);
  const [sort, setSort] = useState("none");

  function filterAndSortHogs() {
    const filtered = hogs.filter((hog) => {
      if (greased) {
        return hog.greased;
      } else {
        return true;
      }
    });
    if (sort === "none") {
      return filtered;
    } else if (sort === "name") {
      return filtered.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      return filtered.sort((a, b) => {
        if (a.weight > b.weight) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  function renderHogTiles() {
    return filterAndSortHogs().map((hog) => {
      return <HogTile hog={hog} key={uuidv4()} />;
    });
  }

  function handleClick() {
    setGreased(!greased);
  }

  function handleChange(event) {
    setSort(event.target.value);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {greased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>
      <select onChange={handleChange}>
        <option>None</option>
        <option>Name</option>
        <option>Weight</option>
      </select>
      <div className="ui grid container">{renderHogTiles()}</div>
    </div>
  );
}

export default HogContainer;
