import { Add, Cancel, Remove } from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="quantity__container">
          <div className="quantity__item">
            <div className="iconContent">
              <Add className="iconQuantity" />
              <span>2</span>
              <Remove className="iconQuantity" />
            </div>
            <span>Adults</span>
          </div>
          <div className="quantity__item">
            <div className="iconContent">
              <Add className="iconQuantity" />
              <span>1</span>
              <Remove className="iconQuantity" />
            </div>
            <span>Children</span>
          </div>
          <div className="quantity__item">
            <div className="iconContent">
              <Add className="iconQuantity" />
              <span>1</span>
              <Remove className="iconQuantity" />
            </div>
            <span>Rooms</span>
          </div>
        </div>
        <hr />
        <div className="booking__container">
          <form>
            <div className="input__form">
              <div className="date__container">
                <div className="itemDate">
                  <span>Check In</span>
                  <input type="date" />
                </div>
                <div className="itemDate">
                  <span>Check Out</span>
                  <input type="date" />
                </div>
              </div>
              <hr />
              <div className="order__container">
                <div className="title__order">
                  <span>Your Order</span>
                </div>
                <div className="room__container">
                  <span>Deluxe Room</span>
                  <div className="roomTime">
                    <span>1 Night</span>
                    <Cancel className="cancelIcon" />
                  </div>
                </div>
                <div className="total__container">
                  <span className="total">TOTAL</span>
                  <span className="totalNumber">$395.00</span>
                </div>
              </div>
            </div>
            <div className="buttons__container">
              <button className="book__now">Book Now</button>
              <button className="addItininerary">Add to Itinerary</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
