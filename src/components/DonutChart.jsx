import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#4CAF50", "#FFC107", "#dc4493"]; // green, yellow, red

const DonutChart = ({ easy, medium, hard }) => {
  const total = easy + medium + hard;

  const data = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ];

  return (
    <div className="relative w-[250px] h-[250px] flex items-center justify-center mt-5">
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute text-3xl font-semibold text-white">
        {total}
      </div>
    </div>
  );
};

export default DonutChart;
