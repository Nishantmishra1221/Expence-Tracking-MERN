import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: '#023e8a',
    },
  ],
};

const websiteViewsData = {
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
  datasets: [
    {
      label: 'Website Views',
      data: [100, 50, 30, 80, 40, 70],
      borderColor: '#0077b6',
      fill: false,
    },
  ],
};

function Analytics() {
  return (
    <div>
      <h3 style={{ color: '#03045e' }}>Sales Analytics</h3>
      <Bar data={salesData} />
      <h3 style={{ color: '#03045e', marginTop: '20px' }}>Website Views</h3>
      <Line data={websiteViewsData} />
    </div>
  );
}

export default Analytics;