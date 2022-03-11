import {
  KeyboardArrowDown,
  Person,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brackLine"></div>
      <div className="navbar__wrapper">
        <div className="navbarLeft__container">
          <div className="logo__container">
            <h2>UNITED</h2>
          </div>
        </div>
        <div className="navbarRight__container">
          <div className="navbarOptions__container">
            <ul>
              <li>
                Categories <KeyboardArrowDown />
              </li>
              <li>
                ENG <KeyboardArrowDown />
              </li>
              <li>USD$</li>
              <li>Itinerary</li>
              <li className="item__cart">
                <span className="numberCart">6</span>
                <ShoppingCartOutlined className="cartIcon" />
              </li>
              <li>
                <div className="user__container">
                  <Person className="userIcon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
