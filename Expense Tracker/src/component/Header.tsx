import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import BasicModal from "./Modal";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid container alignItems="center">
        <Grid size={6}>
          <Typography variant="h5">Expense Tracker</Typography>
        </Grid>
        <Grid size={6}>
          <Button
            variant="contained"
            sx={{ float: "right" }}
            onClick={() => setOpen(true)}
          >
            Add New Transaction
          </Button>
        </Grid>
      </Grid>
      <BasicModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default Header;
