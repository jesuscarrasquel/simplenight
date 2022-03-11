import React from "react";
import { GppGood, Hotel } from "@mui/icons-material";
import "./mainContent.css";
import Tag from "../tags/Tag";
import NavDesc from "../navDesc/NavDesc";
import Chart from "../chart/Chart";
import Review from "../review/Review";

export default function MainContent() {
  return (
    <div className="mainContent">
      <div className="title__container">
        <div className="icon__container">
          <Hotel className="iconHotel" />
        </div>
        <span>Waldorf Astoria</span>
      </div>
      <Tag />
      <NavDesc />
      <div className="standard__container">
        <div className="title__standard__container">
          <h3>Safety Standards</h3>
          <div className="iconSafe__container">
            <GppGood className="iconSafe" />
          </div>
        </div>
        <div className="desc__standard__container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          beatae sequi quisquam necessitatibus! Ab, sint! Sunt, dignissimos
          reiciendis veritatis dicta in voluptatem fugiat, sed recusandae,
          eveniet facere maxime accusantium corrupti.
        </div>
      </div>
      <Chart />
      <Review />
    </div>
  );
}
