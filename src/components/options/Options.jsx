import { Hotel } from "@mui/icons-material";
import React from "react";
import "./options.css";
import { optionsData } from "../../dummyData";
import CardOption from "../cardOption/CardOption";
export default function Options() {
  return (
    <div className="options">
      <div className="options__wrapper">
        <div className="title__options">
          <div className="container__iconOptions">
            <Hotel className="iconHotelOptions" />
          </div>
          <h3>Others You May Like</h3>
        </div>
        <div className="options__container">
          {optionsData.map((item) => (
            <CardOption info={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
