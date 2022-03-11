import React, { useState } from "react";
import * as Icons from "@mui/icons-material";
import "./cardReview.css";

export default function CardReview({ info }) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="cardReview">
      <div className="cardReview__wrapper">
        <div className="cardReview__left">
          <div
            className="iconReview__container"
            style={{
              backgroundColor: info.bgLight,
              color: info.bg,
              border: `3px solid ${info.bg}`,
            }}
          >
            {React.createElement(Icons[info.icon])}
          </div>
        </div>
        <div className="cardReview__right">
          <div className="cardReview__header">
            <h3>{info.title}</h3>
            <div className="number__container">
              <span style={{ color: info.bg }}>{info.result}</span>
              {numbers.map((item) => (
                <div
                  className="number__item"
                  style={{ backgroundColor: info.score >= item && info.bg }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <span>{info.desc}</span>
          <hr />
        </div>
      </div>
    </div>
  );
}
