import React from "react";
import {
  CleaningServicesOutlined,
  Favorite,
  Groups,
  Share,
} from "@mui/icons-material";
import "./tag.css";
export default function Tag() {
  return (
    <div className="tag">
      <div className="tag__container">
        <div className="tag__left">
          <div className="tag__container__span">
            <span>Tag</span>
          </div>
          <div className="tag__container__span">
            <span>LongerTag</span>
          </div>
          <div className="tag__container__span">
            <span>Tag</span>
          </div>
          <div className="tag__container__span">
            <span>LongerTag</span>
          </div>
        </div>
        <div className="tag__right">
          <div className="tag__container__span__clean">
            <CleaningServicesOutlined className="tagIcon" />
            <span>Very Clean</span>
          </div>
          <div className="tag__container__span__crow">
            <Groups className="tagIcon" />
            <span>Crowded</span>
          </div>
          <div className="tag__container__span">
            <Favorite className="tagIcon" />
          </div>
          <div className="tag__container__span">
            <Share className="tagIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
