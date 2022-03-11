import { Info, InfoOutlined } from "@mui/icons-material";
import React from "react";
import {
  Cell,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import "./chart.css";
import { dataChart } from "../../dummyData";
export default function Chart() {
  const formatYAxis = (value) => {
    if (value === 1000) return "Very Crowded";
    if (value === 750) return "Hight";
    if (value === 500) return "Medium";
    if (value === 250) return "Low";
    if (value === 0) return "Very Low";
  };
  return (
    <div className="chart">
      <div className="chart__wrapper">
        <div className="title__chart__container">
          <div className="title__chart">
            <span>Crowded Times</span>
            <div className="info__container">
              <InfoOutlined className="infoIcon" />
            </div>
          </div>
          <div className="input__select">
            <select>
              <option value="avarageDaily">Average Daily</option>
            </select>
          </div>
        </div>

        <BarChart
          width={730}
          height={250}
          data={dataChart}
          margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="recharts-xAxis" stroke="hide" />

          <YAxis tickFormatter={formatYAxis} stroke="hide" />
          <Bar dataKey="amount" fill="#8884d8">
            {dataChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={dataChart[index % 20].bg} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
