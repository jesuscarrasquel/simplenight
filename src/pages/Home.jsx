import React from "react";
import Content from "../components/content/Content";
import Options from "../components/options/Options";
import Slider from "../components/slider/Slider";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <Content />
      <Options />
    </div>
  );
}
