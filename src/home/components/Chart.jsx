import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts';

const Chart = ({ principal, returns }) => {
  const principalValue = Number(principal) || 0;
  const returnsValue = Number(returns) || 0;

  const pieData = [
    { name: 'Total Investments', value: principalValue },
    { name: 'Total Returns', value: returnsValue },
  ];

  const COLORS = ['#00C49F', '#5367FF'];

  return (
    <div className='flex justify-center '>
      <PieChart width={700} height={400}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={110}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Chart;