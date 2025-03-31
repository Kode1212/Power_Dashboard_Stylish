import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';

const DetailsPage = () => {
  const { graphId } = useParams();
  const location = useLocation();
  const { graphData } = location.state || {};

  if (!graphData) {
    return <div>No data available</div>;
  }

  const { data, type } = graphData;

  const renderGraph = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="voltage" fill="#8884d8" />
            <Bar dataKey="current" fill="#82ca9d" />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
          </LineChart>
        );
      case 'pie':
        return (
          <PieChart width={600} height={400}>
            <Pie data={data} dataKey="current" nameKey="name" cx="50%" cy="50%" outerRadius={150}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index % 3]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return <div>No chart available</div>;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Details for {graphId}</h2>
      {renderGraph()}
      <p>This is where you can show detailed information about the selected graph.</p>
    </div>
  );
};

export default DetailsPage;
