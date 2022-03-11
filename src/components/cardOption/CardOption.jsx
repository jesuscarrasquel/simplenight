import React from "react";
import "./cardOption.css";
import * as Icons from "@mui/icons-material";
export default function CardOption({ info }) {
  console.log(info);
  return (
    <div className="cardOption">
      <div className="imageOption__container">
        <img src={info.img} alt="optionImage" className="imgOption" />
        <div className="iconOption__container">
          {React.createElement(Icons[info.icon])}
        </div>
      </div>
      <div className="infoOption__container">
        <h3>{info.title}</h3>
        <p>{info.desc}</p>
        <span>FROM ${info.price}</span>
      </div>
    </div>
  );
}
