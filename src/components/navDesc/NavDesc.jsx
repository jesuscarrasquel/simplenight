import React from "react";
import "./navDesc.css";

export default function NavDesc() {
  return (
    <div className="navbarDesc">
      <div className="navDesc__wrapper">
        <ul>
          <li>
            <span>ROOMS</span>
          </li>
          <li>
            <span>DETAILS</span>
          </li>
          <li>
            <span>MAP</span>
          </li>
          <li className="active">
            <span>SAFETY</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
