import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./barchar.scss";

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Oct',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BarChard = () => {
  return (
    <div className='chart'>
        <h1 className="title">Overview</h1>

    <div className="title">

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <CartesianGrid stroke="transparent" /> 
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} shadowSize={5} className='recharts-bar-rectangle'
          isAnimationActive={false} fillOpacity={1}>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.uv > 3000 ? '#ff7300' : '#8884d8'} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
    
    
  )
}

export default BarChard