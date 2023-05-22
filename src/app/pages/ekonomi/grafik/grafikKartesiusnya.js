import { Line } from 'react-chartjs-2';


export default function CartesianChart (){
  const chartData = {
    labels: ['Point 1', 'Point 2'],
    datasets: [
      {
        label: 'Data Points',
        data: [
          { x: 0, y: 6000 },
          { x: 18000, y: 0 },
        ],
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'X-axis',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Y-axis',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

