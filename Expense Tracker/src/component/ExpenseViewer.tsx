import { useContext } from "react";
import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import type { Transaction } from "../utils/Types";
import { listStyle } from "../utils/style";
function ExpenseViewer() {
  const { allTransaction, filter, filteredTransactions } =
    useContext(GlobalContext);
  const transactions =
    filter.type === "all" ? allTransaction : filteredTransactions;
  return (
    <Grid container spacing={2}>
      <Grid
        size={6}
        sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 3,padding:'10px' }}
      >
        <Typography variant="h6">Income</Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {transactions
            .filter((item: Transaction) => item.type === "income")
            .map((item: Transaction, index: number) => (
              <ListItem key={index} sx={listStyle}>
                <ListItemText
                  primary={item.date.format("YYYY-MM-DD")}
                  secondary={item.description}
                  sx={{ flex: 1 }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.amount}
                </Typography>
              </ListItem>
            ))}
        </List>
      </Grid>
      <Grid
        size={6}
        textAlign="left"
        sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 3,padding:'10px' }}
      >
        <Typography variant="h6">Expense</Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {transactions
            .filter((item: Transaction) => item.type === "expense")
            .map((item: Transaction, index: number) => (
              <ListItem key={index} sx={listStyle}>
                <ListItemText
                  primary={item.date.format("YYYY-MM-DD")}
                  secondary={item.description}
                  sx={{ flex: 1 }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.amount}
                </Typography>
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default ExpenseViewer;
