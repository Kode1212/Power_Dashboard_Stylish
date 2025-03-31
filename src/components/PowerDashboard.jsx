import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, CartesianGrid
} from 'recharts';
import './PowerDashboard.css';

const data = [
  { name: '0', voltage: 220, current: 15, powerfactor: 0.95, temperature: 30, frequency: 50 },
  { name: '10', voltage: 230, current: 16, powerfactor: 0.97, temperature: 32, frequency: 49.5 },
  { name: '20', voltage: 225, current: 14, powerfactor: 0.96, temperature: 29, frequency: 50.2 },
  { name: '30', voltage: 235, current: 18, powerfactor: 0.94, temperature: 31, frequency: 50.1 },
];

const gaugeData = [
  { name: 'Current Usage', value: 65 },
  { name: 'Remaining', value: 35 }
];

const PowerDashboard = () => {
  const navigate = useNavigate();

  const handleClick = (graphId, graphType) => {
    const graphData = {
      id: graphId,
      type: graphType,
      data
    };
    navigate(`/details/${graphId}`, { state: { graphData } });
  };

  // Contrasting monochromatic colors
  const colors = ['#3ba19f', '#a0a0a0', '#707070', '#2c3e50', '#1c2833'];

  return (
    <div className="dashboard-container">

      {/* Power (Gauge Pie Chart) */}
      <div className="chart-card" onClick={() => handleClick('Power', 'gauge')}>
        <PieChart width={300} height={200}>
          <Pie
            data={gaugeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="90%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={100}
            label
          >
            {gaugeData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={colors[index % colors.length]} 
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Voltage (Bar Chart) */}
      <div className="chart-card" onClick={() => handleClick('voltage', 'bar')}>
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="voltage" fill="#3ba19f" />
        </BarChart>
      </div>

      {/* Current (Bar Chart) */}
      <div className="chart-card" onClick={() => handleClick('current', 'bar')}>
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#a0a0a0" />
        </BarChart>
      </div>

      {/* Power Factor (Line Chart) */}
      <div className="chart-card" onClick={() => handleClick('power-factor', 'line')}>
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="powerfactor" stroke="#707070" />
        </LineChart>
      </div>

      {/* Temperature (Line Chart) */}
      <div className="chart-card" onClick={() => handleClick('temperature', 'line')}>
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#2c3e50" />
        </LineChart>
      </div>

      {/* Frequency (Line Chart) */}
      <div className="chart-card" onClick={() => handleClick('frequency', 'line')}>
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="frequency" stroke="#1c2833" />
        </LineChart>
      </div>

    </div>
  );
};

export default PowerDashboard;
