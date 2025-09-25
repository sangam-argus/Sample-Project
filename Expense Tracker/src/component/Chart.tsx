import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export function Chart({totalIncome,totalExpense}:{totalIncome:number,totalExpense:number}) {
const data = {
  labels: ['expense','income'],
  datasets: [
    {
      label: 'Amount',
      data: [totalExpense,totalIncome],
      backgroundColor: [
        "#4caf50",
        "#f44336"
      ],
      
    },
  ],
};

  return <Pie data={data} />;
}
