import { Grid } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export function Chart({
  totalIncome,
  totalExpense,
}: {
  totalIncome: number;
  totalExpense: number;
}) {
  const data = {
    labels: ["expense", "income"],
    datasets: [
      {
        label: "Amount",
        data: [totalExpense, totalIncome],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };
  {
    console.log("income", totalIncome, "expense", totalExpense);
  }

  const options = {
    plugins: {
      legend: {
        display: false, // This hides the entire legend
      },
    },
  };

  return (
    <Grid
      display={"flex"}
      justifyContent={"center"}
      height={"40vh"}
      alignItems={"center"}
      marginTop={"10px"}
    >
      <Pie data={data} options={options} />
    </Grid>
  );
}
