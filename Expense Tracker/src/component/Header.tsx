import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import BasicModal from "./Modal";
import logo from "/budget.png"
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid container bgcolor={"#D9D9D9"} alignItems="center" paddingInline={"40px"} sx={{position:'absolute',top:'0',width:'100vw',left:'0',height:'10vh'}}>
        <Grid size={6} display={"flex"} flexDirection={"row"} gap={"20px"}>
          <img src={logo} width={"30px"}/>

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
