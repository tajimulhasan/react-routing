import React from "react";
import LineCharts from "./LineCharts";
import PieCharts from "./PieCharts";
import "./DashBoard.css";
import BarCharts from "./BarCharts";
import ScatterCharts from "./ScatterCharts";
const DashBoard = () => {
  return (
    <div className="for-grid">
      <div className="line-chart">
      <h3 className="text-center text-info pb-3">Investment and Sell</h3>
        <LineCharts></LineCharts>
      </div>
      <div className="pie-chart">
      <h3 className="text-center text-info pb-3">Sell And Value</h3>
        <PieCharts></PieCharts>
      </div>
      <div className="bar-charts">
        <h3 className="text-center text-info pb-3">Investment Vs Revenue</h3>
        <BarCharts></BarCharts>
      </div>
      <div className="scatterCharts">
      <h3 className="text-center text-info pb-3">Data-01 and Data-02</h3>
        <ScatterCharts></ScatterCharts>      
        </div>
     
    </div>
  );
};

export default DashBoard;
