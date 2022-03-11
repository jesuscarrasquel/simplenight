import React from "react";
import MainContent from "../main/MainContent";
import Sidebar from "../sidebar/Sidebar";
import "./content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="mainContent__container">
          <MainContent />
        </div>
        <div className="sidebar__container">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
