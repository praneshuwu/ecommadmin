import './chart.css';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({title,data, dataKey,grid}) => {

  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#474747' />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#474747'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
