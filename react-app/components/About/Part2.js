import React, { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About";
export default function Part2() {
  const [facilities] = useState([
    {
      id: "B1",
      title1: "pc-c3",
      title2: "pc-c1",
      text: "  We develop a passion for learning"
    },
    {
      id: "B2",
      title1: "pc-c3",
      title2: "pc-c1",
      text: "Helping each of our students fulfill the potential"
    },
    {
      id: "B3",
      title1: "pc-c3",
      title2: "pc-c1",
      text: "Providing students scrupulous academics"
    },
    {
      id: "B4",
      title1: "pc-c3",
      title2: "pc-c1",
      text: "We create light through knowledge, students will find the way"
    },
    {
      id: "B5",
      title1: "pc-c3",
      title2: "pc-c1",
      text: " Providing safe and educational environment"
    },
    {
      id: "B6",
      title1: "pc-c3",
      title2: "pc-c1",
      text: " We provide what students will like!"
    }
  ]);

  return (
    <div className="col-md-6">
      <h3 className="pc-c6"> What We Do</h3>
      {facilities.map(data => (
        <p>
          <FontAwesomeIcon icon={faAngleRight} className={data.title2} />
          <span className={data.title1}>{data.text} </span>
        </p>
      ))}
    </div>
  );
}
