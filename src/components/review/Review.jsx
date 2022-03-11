import React from "react";

import "./review.css";
import { dataReview } from "../../dummyData";
import CardReview from "../cardReview/CardReview";

export default function Review() {
  return (
    <div className="review">
      <div className="review__wrapper">
        {dataReview.map((item, id) => (
          <CardReview info={item} key={id} />
        ))}
      </div>
    </div>
  );
}
