import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const MileChart = () => {
  const [usage, setUsage] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/DayStat")
      .then((response) => response.data)
      .then((data) => {
        setUsage(
          data.statics.map((item) => ({
            day: item.day.slice(0, 3),
            usageStats: item.usageStats,
          }))
        );
      });
  }, []);

  return (
    <ResponsiveContainer width="100%">
      <BarChart data={usage}>
        <XAxis dataKey="day" stroke="#2884ff" />
        <Bar
          dataKey="usageStats"
          stroke="#2884ff"
          fill="#2884ff"
          barSize={30}
        />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MileChart;
