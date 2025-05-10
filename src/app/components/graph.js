// GroupedBarChart.jsx
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: [
        'January', 'February', 'March', 'April', 'May', 'July',
        'September', 'October', 'November', 'December'
      ],
      datasets: [
        {
          label: '2024 Revenue',
          data: [20, 90, 10, 60, 65, 100, 45, 10, 5, 15],
          backgroundColor: 'yellow',
          barThickness: 22, 
        },
        {
          label: '2023 Revenue',
          data: [40, 60, 60, 40, 50, 110, 80, 70, 75, 40],
          backgroundColor: 'blue',
          barThickness: 22, 
        }
      ]
  };
  
  const options =  {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          fall: {
            type: 'label',
            xValue: 'February',
            yValue: 100,
            backgroundColor: 'rgba(200,0,0,0.8)',
            content: ['A fall in revenue'],
            color: 'white',
            font: {
              weight: 'bold',
              size: 12
            },
            padding: 6
          },
          rise: {
            type: 'label',
            xValue: 'July',
            yValue: 110,
            backgroundColor: 'rgba(0,128,0,0.8)',
            content: ['A rise in revenue'],
            color: 'white',
            font: {
              weight: 'bold',
              size: 12
            },
            padding: 6
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120
      }
    }
  }

  export default function GroupedBarChart() {
    return <Bar data={data} options={options} />;
  }