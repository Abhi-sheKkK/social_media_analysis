import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ metrics }) {
  const data = {
    labels: metrics.map((metric) => metric.type.toUpperCase()),
    datasets: [
      {
        label: "Avg. Likes",
        data: metrics.map((metric) => metric.avgLikes),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Avg. Shares",
        data: metrics.map((metric) => metric.avgShares),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Avg. Comments",
        data: metrics.map((metric) => metric.avgComments),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Engagement Metrics Comparison",
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
