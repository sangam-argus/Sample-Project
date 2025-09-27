import { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import { Chart } from "./Chart";
import FilterOptions from "./FilterOptions";

function Summary() {
  const { totalExpense, totalIncome } = useContext(GlobalContext);
  const balance = totalIncome - totalExpense;

  return (
    <Grid
      container
      spacing={2}
      height={"60vh"}
      marginTop={"20px"}
      padding={"10px"}
    >
      {/* Left Part: Balance */}
      <Grid
        size={4}
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          color={balance >= 0 ? "success.main" : "error.main"}
          fontWeight="bold"
        >
          Balance: ${balance}
        </Typography>
        <Box textAlign="center" mt={2}>
          <Typography variant="h6" color="primary.main">
            ${totalIncome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Income
          </Typography>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography variant="h6" color="error.main">
            ${totalExpense}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Expense
          </Typography>
        </Box>
      
      </Grid>

      {/* Middle Part: Filter Options */}
      <Grid
        size={4}
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          gap:'20px'
        }}
      >
        <FilterOptions />
      </Grid>

      {/* Right Part: Chart */}
      <Grid
        size={4}
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Chart totalExpense={totalExpense} totalIncome={totalIncome} />
      </Grid>
    </Grid>
  );
}

export default Summary;
